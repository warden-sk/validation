/*
 * Copyright 2022 Marek Kobida
 */

import UndefinedType from '../../../types/primitives/UndefinedType';

const type = new UndefinedType();

test('UndefinedType.decode', () => {
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

  expect(type.decode(undefined)).toStrictEqual({
    $: 'Right',
    right: undefined,
  });
});

test('UndefinedType.encode', () => {
  expect(type.encode(undefined)).toBe(undefined);
});

test('UndefinedType.is', () => {
  expect(type.is(0)).toBe(false);
  expect(type.is(undefined)).toBe(true);
});

test('UndefinedType.name', () => {
  expect(type.name).toBe('undefined');
});

test('UndefinedType.validate', () => {
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
