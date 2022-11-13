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
const t = __importStar(require("../../../next"));
test('BooleanType.decode', () => {
    expect(t.boolean.decode(true)).toStrictEqual({
        $: 'Right',
        right: true,
    });
    expect(t.boolean.decode(0)).toStrictEqual({
        $: 'Left',
        left: [
            {
                context: [
                    {
                        input: 0,
                        key: '',
                        type: t.boolean,
                    },
                ],
                input: 0,
            },
        ],
    });
});
test('BooleanType.encode', () => {
    expect(t.boolean.encode(true)).toBe(true);
});
test('BooleanType.is', () => {
    expect(t.boolean.is(true)).toBe(true);
    expect(t.boolean.is(0)).toBe(false);
});
test('BooleanType.name', () => {
    expect(t.boolean.name).toBe('boolean');
});
test('BooleanType.validate', () => {
    expect(t.boolean.validate(0, [])).toStrictEqual({
        $: 'Left',
        left: [
            {
                context: [],
                input: 0,
            },
        ],
    });
});
