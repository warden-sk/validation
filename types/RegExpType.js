"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringType_1 = __importDefault(require("./primitives/StringType"));
const Type_1 = __importDefault(require("../helpers/Type"));
const identity_1 = __importDefault(require("../helpers/identity"));
class RegExpType extends Type_1.default {
    pattern;
    constructor(pattern) {
        super('string', (input) => {
            if (new StringType_1.default().is(input)) {
                return pattern.test(input);
            }
            return false;
        }, (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }])), identity_1.default);
        this.pattern = pattern;
    }
}
exports.default = RegExpType;
