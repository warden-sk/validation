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
class ArrayType extends Type_1.default {
    of;
    constructor(of) {
        super(`${of.name}[]`, 
        //----------------------------------------------------------------------------------------------------------------
        (input) => Array.isArray(input) && input.every(of.is), 
        //----------------------------------------------------------------------------------------------------------------
        (input, context) => {
            if (Array.isArray(input)) {
                let errors = [];
                for (const key in input) {
                    const validation = of.validate(input[key], [...context, { input: input[key], key, type: of }]);
                    if ((0, either_1.isLeft)(validation)) {
                        errors = [...errors, ...validation.left];
                    }
                }
                return errors.length > 0 ? this.left(errors) : this.right(input);
            }
            return this.left([{ context, input }]);
        }, () => {
            throw new Error(errorMessages_1.default.FUNCTION_NOT_IMPLEMENTED); // dokončiť
        });
        this.of = of;
    }
}
exports.default = ArrayType;
