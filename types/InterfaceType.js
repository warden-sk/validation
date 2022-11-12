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
const isObject_1 = __importDefault(require("../helpers/isObject"));
const typeName_1 = __importDefault(require("../helpers/typeName"));
class InterfaceType extends Type_1.default {
    of;
    constructor(of) {
        super(`{ ${(0, typeName_1.default)(Object.keys(of), key => `${key}: ${of[key].name}`, '; ')} }`, 
        //----------------------------------------------------------------------------------------------------------------
        (input) => (0, isObject_1.default)(input) && Object.keys(of).every(key => of[key].is(input[key])), 
        //----------------------------------------------------------------------------------------------------------------
        (input, context) => {
            if ((0, isObject_1.default)(input)) {
                let errors = [];
                const output = {};
                for (const key of Object.keys(of)) {
                    const type = of[key];
                    const validation = type.validate(input[key], [...context, { input: input[key], key, type }]);
                    if ((0, either_1.isLeft)(validation)) {
                        errors = [...errors, ...validation.left];
                    }
                    if ((0, either_1.isRight)(validation)) {
                        output[key] = input[key];
                    }
                }
                return errors.length > 0 ? this.left(errors) : this.right(output);
            }
            return this.left([{ context, input }]);
        }, identity_1.default);
        this.of = of;
    }
}
exports.default = InterfaceType;
