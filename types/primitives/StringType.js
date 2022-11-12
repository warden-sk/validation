"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Type_1 = __importDefault(require("../../helpers/Type"));
const UndefinedType_1 = __importDefault(require("./UndefinedType"));
const identity_1 = __importDefault(require("../../helpers/identity"));
class StringType extends Type_1.default {
    $;
    constructor($ = {}) {
        super('string', (input) => {
            if (typeof input === 'string') {
                return !(!new UndefinedType_1.default().is($.pattern) && !$.pattern.test(input));
            }
            return false;
        }, (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }])), identity_1.default);
        this.$ = $;
    }
}
exports.default = StringType;
