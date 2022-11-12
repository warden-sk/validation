"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Type_1 = __importDefault(require("../helpers/Type"));
const identity_1 = __importDefault(require("../helpers/identity"));
const either_1 = require("../either");
const typeName_1 = __importDefault(require("../helpers/typeName"));
class TupleType extends Type_1.default {
    of;
    constructor(of) {
        super(`[${(0, typeName_1.default)(of, type => type.name, ', ')}]`, 
        //----------------------------------------------------------------------------------------------------------------
        (input) => Array.isArray(input) && input.length === of.length && of.every((type, key) => type.is(input[key])), 
        //----------------------------------------------------------------------------------------------------------------
        (input, context) => {
            if (Array.isArray(input)) {
                let errors = [];
                // dokončiť "output"
                for (const key in of) {
                    const type = of[key];
                    const validation = type.validate(input[key], [...context, { input: input[key], key, type }]);
                    if ((0, either_1.isLeft)(validation)) {
                        errors = [...errors, ...validation.left];
                    }
                }
                return errors.length > 0 ? this.left(errors) : this.right(input);
            }
            return this.left([{ context, input }]);
        }, identity_1.default);
        this.of = of;
    }
}
exports.default = TupleType;
