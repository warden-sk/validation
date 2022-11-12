/*
 * Copyright 2022 Marek Kobida
 */

import LiteralType from '../../../types/primitives/LiteralType';

function on(input: boolean | number | string) {
  const type = new LiteralType(input);

  test(`LiteralType.decode with ${typeof input}`, () => {
    expect(type.decode(input)).toStrictEqual({
      $: 'Right',
      right: input,
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

  test(`LiteralType.encode with ${typeof input}`, () => {
    expect(type.encode(input)).toBe(input);
  });

  test(`LiteralType.is with ${typeof input}`, () => {
    expect(type.is(input)).toBe(true);
    expect(type.is(undefined)).toBe(false);
  });

  test(`LiteralType.name with ${typeof input}`, () => {
    expect(type.name).toBe(typeof input === 'string' ? `"${input}"` : input.toString());
  });
}

on(true);
on(0);
on('Marek Kobida');
