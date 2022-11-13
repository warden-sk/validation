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
test('UndefinedType.decode', () => {
    expect(t.undefined.decode(undefined)).toStrictEqual({
        $: 'Right',
        right: undefined,
    });
    expect(t.undefined.decode(0)).toStrictEqual({
        $: 'Left',
        left: [
            {
                context: [
                    {
                        input: 0,
                        key: '',
                        type: t.undefined,
                    },
                ],
                input: 0,
            },
        ],
    });
});
test('UndefinedType.encode', () => {
    expect(t.undefined.encode(undefined)).toBe(undefined);
});
test('UndefinedType.is', () => {
    expect(t.undefined.is(undefined)).toBe(true);
    expect(t.undefined.is(0)).toBe(false);
});
test('UndefinedType.name', () => {
    expect(t.undefined.name).toBe('undefined');
});
test('UndefinedType.validate', () => {
    expect(t.undefined.validate(0, [])).toStrictEqual({
        $: 'Left',
        left: [
            {
                context: [],
                input: 0,
            },
        ],
    });
});
