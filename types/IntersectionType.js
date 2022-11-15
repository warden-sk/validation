"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Type_1 = __importDefault(require("../helpers/Type"));
const errorMessages_1 = __importDefault(require("../helpers/errorMessages"));
const either_1 = require("../either");
const typeName_1 = __importDefault(require("../helpers/typeName"));
class IntersectionType extends Type_1.default {
    of;
    constructor(of) {
        super((0, typeName_1.default)(of, type => type.name, ' & '), 
        //----------------------------------------------------------------------------------------------------------------
        (input) => of.every(type => type.is(input)), 
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
            }
            return errors.length > 0 ? this.left(errors) : this.right(input);
        }, () => {
            throw new Error(errorMessages_1.default.FUNCTION_NOT_IMPLEMENTED); // dokončiť
        });
        this.of = of;
    }
}
exports.default = IntersectionType;
