"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UndefinedType_1 = __importDefault(require("../../../types/primitives/UndefinedType"));
const type = new UndefinedType_1.default();
test('UndefinedType.decode', () => {
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
    expect(type.decode(undefined)).toStrictEqual({
        $: 'Right',
        right: undefined,
    });
});
test('UndefinedType.encode', () => {
    expect(type.encode(undefined)).toBe(undefined);
});
test('UndefinedType.is', () => {
    expect(type.is(0)).toBe(false);
    expect(type.is(undefined)).toBe(true);
});
test('UndefinedType.name', () => {
    expect(type.name).toBe('undefined');
});
test('UndefinedType.validate', () => {
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
