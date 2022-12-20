/*
 * Copyright 2023 Marek Kobida
 */

import * as t from '../../..';

function on(of: boolean | number | string) {
  describe(`LiteralType with ${typeof of}`, () => {
    const type = t.literal(of);

    test('LiteralType.decode', () => {
      expect(type.decode(of)).toStrictEqual({
        $: 'Right',
        right: of,
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

    test('LiteralType.encode', () => {
      expect(type.encode(of)).toBe(of);
    });

    test('LiteralType.is', () => {
      expect(type.is(of)).toBe(true);
      expect(type.is(undefined)).toBe(false);
    });

    test('LiteralType.name', () => {
      expect(type.name).toBe(typeof of === 'string' ? `"${of}"` : of.toString());
    });
  });
}

on(true);
on(0);
on('Marek Kobida');
