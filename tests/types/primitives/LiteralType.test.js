"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LiteralType_1 = __importDefault(require("../../../types/primitives/LiteralType"));
function on(input) {
    const type = new LiteralType_1.default(input);
    test(`LiteralType.decode with ${typeof input}`, () => {
        expect(type.decode(input)).toStrictEqual({
            $: 'Right',
            right: input,
        });
        expect(type.decode(undefined)).toStrictEqual({
            $: 'Left',
            left: [
                {
                    context: [
                        {
                            input: undefined,
                            key: '',
                            type,
                        },
                    ],
                    input: undefined,
                },
            ],
        });
    });
    test(`LiteralType.encode with ${typeof input}`, () => {
        expect(type.encode(input)).toBe(input);
    });
    test(`LiteralType.is with ${typeof input}`, () => {
        expect(type.is(input)).toBe(true);
        expect(type.is(undefined)).toBe(false);
    });
    test(`LiteralType.name with ${typeof input}`, () => {
        expect(type.name).toBe(typeof input === 'string' ? `"${input}"` : input.toString());
    });
}
on(true);
on(0);
on('Marek Kobida');
