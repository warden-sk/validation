"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const either_1 = require("../either");
const Type_1 = __importDefault(require("../helpers/Type"));
const identity_1 = __importDefault(require("../helpers/identity"));
const typeName_1 = __importDefault(require("../helpers/typeName"));
//                         minimálne 2
class UnionType extends Type_1.default {
    of;
    constructor(of) {
        super((0, typeName_1.default)(of, type => type.name, ' | '), 
        //----------------------------------------------------------------------------------------------------------------
        (input) => of.some(type => type.is(input)), 
        //----------------------------------------------------------------------------------------------------------------
        (input, context) => {
            let errors = [];
            // dokončiť "output"
            for (const key in of) {
                const type = of[key];
                const validation = type.validate(input, [...context, { input, key, type }]);
                if ((0, either_1.isLeft)(validation)) {
                    errors = [...errors, ...validation.left];
                }
                if ((0, either_1.isRight)(validation)) {
                    return this.right(input);
                }
            }
            return this.left(errors);
        }, identity_1.default);
        this.of = of;
    }
}
exports.default = UnionType;
