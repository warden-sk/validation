/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '../../../next';

function on(of: boolean | number | string) {
  const type = t.literal(of);

  test(`LiteralType.decode with ${typeof of}`, () => {
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

  test(`LiteralType.encode with ${typeof of}`, () => {
    expect(type.encode(of)).toBe(of);
  });

  test(`LiteralType.is with ${typeof of}`, () => {
    expect(type.is(of)).toBe(true);
    expect(type.is(undefined)).toBe(false);
  });

  test(`LiteralType.name with ${typeof of}`, () => {
    expect(type.name).toBe(typeof of === 'string' ? `"${of}"` : of.toString());
  });
}

on(true);
on(0);
on('Marek Kobida');
