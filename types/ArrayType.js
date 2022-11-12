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
                const output = [];
                for (const key in input) {
                    const validation = of.validate(input[key], [...context, { input: input[key], key, type: of }]);
                    if ((0, either_1.isLeft)(validation)) {
                        errors = [...errors, ...validation.left];
                    }
                    if ((0, either_1.isRight)(validation)) {
                        output[key] = validation.right;
                    }
                }
                return errors.length > 0 ? this.left(errors) : this.right(output);
            }
            return this.left([{ context, input }]);
        }, identity_1.default);
        this.of = of;
    }
}
exports.default = ArrayType;
