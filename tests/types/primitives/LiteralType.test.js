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
function on(of) {
    test(`LiteralType.decode with ${typeof of}`, () => {
        expect(t.literal(of).decode(of)).toStrictEqual({
            $: 'Right',
            right: of,
        });
        expect(t.literal(of).decode(undefined)).toStrictEqual({
            $: 'Left',
            left: [
                {
                    context: [
                        {
                            input: undefined,
                            key: '',
                            type: t.literal(of),
                        },
                    ],
                    input: undefined,
                },
            ],
        });
    });
    test(`LiteralType.encode with ${typeof of}`, () => {
        expect(t.literal(of).encode(of)).toBe(of);
    });
    test(`LiteralType.is with ${typeof of}`, () => {
        expect(t.literal(of).is(of)).toBe(true);
        expect(t.literal(of).is(undefined)).toBe(false);
    });
    test(`LiteralType.name with ${typeof of}`, () => {
        expect(t.literal(of).name).toBe(typeof of === 'string' ? `"${of}"` : of.toString());
    });
}
on(true);
on(0);
on('Marek Kobida');
