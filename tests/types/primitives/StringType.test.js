"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringType_1 = __importDefault(require("../../../types/primitives/StringType"));
const type = new StringType_1.default();
test('StringType.decode', () => {
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
    expect(type.decode('A')).toStrictEqual({
        $: 'Right',
        right: 'A',
    });
});
test('StringType.encode', () => {
    expect(type.encode('A')).toBe('A');
});
test('StringType.is', () => {
    expect(type.is(0)).toBe(false);
    expect(type.is('A')).toBe(true);
});
test('StringType.name', () => {
    expect(type.name).toBe('string');
});
test('StringType.validate', () => {
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
