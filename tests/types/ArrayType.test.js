"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const t = __importStar(require("../.."));
const type = t.array(t.string);
test('ArrayType.decode (left)', () => {
    expect(type.decode(['Marek', 'Kobida'])).toStrictEqual({
        $: 'Right',
        right: ['Marek', 'Kobida'],
    });
    expect(type.decode([])).toStrictEqual({
        $: 'Right',
        right: [],
    });
});
test('ArrayType.decode (right)', () => {
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
    expect(type.decode([0])).toStrictEqual({
        $: 'Left',
        left: [
            {
                context: [
                    {
                        input: [0],
                        key: '',
                        type,
                    },
                    {
                        input: 0,
                        key: '0',
                        type: t.string,
                    },
                ],
                input: 0,
            },
        ],
    });
});
test('ArrayType.is', () => {
    expect(type.is(['Marek', 'Kobida'])).toBe(true);
    expect(type.is([])).toBe(true);
    expect(type.is(0)).toBe(false);
    expect(type.is([0])).toBe(false);
});
test('ArrayType.name', () => {
    expect(type.name).toBe('string[]');
});
