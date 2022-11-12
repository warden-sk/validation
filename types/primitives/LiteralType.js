"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Type_1 = __importDefault(require("../../helpers/Type"));
const identity_1 = __importDefault(require("../../helpers/identity"));
class LiteralType extends Type_1.default {
    of;
    constructor(of) {
        super(typeof of === 'string' ? `"${of}"` : of.toString(), (input) => input === of, (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }])), identity_1.default);
        this.of = of;
    }
}
exports.default = LiteralType;
