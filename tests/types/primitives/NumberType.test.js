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
test('NumberType.decode', () => {
    expect(t.number.decode(0)).toStrictEqual({
        $: 'Right',
        right: 0,
    });
    expect(t.number.decode('A')).toStrictEqual({
        $: 'Left',
        left: [
            {
                context: [
                    {
                        input: 'A',
                        key: '',
                        type: t.number,
                    },
                ],
                input: 'A',
            },
        ],
    });
});
test('NumberType.encode', () => {
    expect(t.number.encode(0)).toBe(0);
});
test('NumberType.is', () => {
    expect(t.number.is(0)).toBe(true);
    expect(t.number.is('A')).toBe(false);
});
test('NumberType.name', () => {
    expect(t.number.name).toBe('number');
});
test('NumberType.validate', () => {
    expect(t.number.validate('A', [])).toStrictEqual({
        $: 'Left',
        left: [
            {
                context: [],
                input: 'A',
            },
        ],
    });
});
