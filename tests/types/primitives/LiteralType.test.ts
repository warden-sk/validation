/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '../../../next';

function on(of: boolean | number | string) {
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
