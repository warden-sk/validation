/*
 * Copyright 2023 Marek Kobida
 */

import * as t from '../../..';

const type = t.undefined;

test('UndefinedType.decode', () => {
  expect(type.decode(undefined)).toStrictEqual({
    $: 'Right',
    right: undefined,
  });

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
});

test('UndefinedType.encode', () => {
  expect(type.encode(undefined)).toBe(undefined);
});

test('UndefinedType.is', () => {
  expect(type.is(undefined)).toBe(true);
  expect(type.is(0)).toBe(false);
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
