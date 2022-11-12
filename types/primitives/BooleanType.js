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
class BooleanType extends Type_1.default {
    constructor() {
        super('boolean', (input) => typeof input === 'boolean', (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }])), identity_1.default);
    }
}
exports.default = BooleanType;
