"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BooleanType_1 = __importDefault(require("../../../types/primitives/BooleanType"));
const type = new BooleanType_1.default();
test('BooleanType.decode', () => {
    expect(type.decode(true)).toStrictEqual({
        $: 'Right',
        right: true,
    });
    expect(type.decode(0)).toStrictEqual({
        $: 'Left',
        left: [
            {
                context: [
                    {
                        input: 0,
                        key: '',
                        type,
                    },
                ],
                input: 0,
            },
        ],
    });
});
test('BooleanType.encode', () => {
    expect(type.encode(true)).toBe(true);
});
test('BooleanType.is', () => {
    expect(type.is(true)).toBe(true);
    expect(type.is(0)).toBe(false);
});
test('BooleanType.name', () => {
    expect(type.name).toBe('boolean');
});
test('BooleanType.validate', () => {
    expect(type.validate(0, [])).toStrictEqual({
        $: 'Left',
        left: [
            {
                context: [],
                input: 0,
            },
        ],
    });
});
