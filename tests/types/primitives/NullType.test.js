"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NullType_1 = __importDefault(require("../../../types/primitives/NullType"));
const type = new NullType_1.default();
test('NullType.decode', () => {
    expect(type.decode(null)).toStrictEqual({
        $: 'Right',
        right: null,
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
test('NullType.encode', () => {
    expect(type.encode(null)).toBe(null);
});
test('NullType.is', () => {
    expect(type.is(null)).toBe(true);
    expect(type.is(0)).toBe(false);
});
test('NullType.name', () => {
    expect(type.name).toBe('null');
});
test('NullType.validate', () => {
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
