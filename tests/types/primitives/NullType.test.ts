/*
 * Copyright 2023 Marek Kobida
 */

import * as t from '../../..';

const type = t.null;

test('NullType.decode', () => {
  expect(type.decode(null)).toStrictEqual({
    $: 'Right',
    right: null,
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

test('NullType.encode', () => {
  expect(type.encode(null)).toBe(null);
});

test('NullType.is', () => {
  expect(type.is(null)).toBe(true);
  expect(type.is(0)).toBe(false);
});

test('NullType.name', () => {
  expect(type.name).toBe('null');
});

test('NullType.validate', () => {
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
