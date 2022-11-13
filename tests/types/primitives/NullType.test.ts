/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '../../../next';

test('NullType.decode', () => {
  expect(t.null.decode(null)).toStrictEqual({
    $: 'Right',
    right: null,
  });

  expect(t.null.decode(0)).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [
          {
            input: 0,
            key: '',
            type: t.null,
          },
        ],
        input: 0,
      },
    ],
  });
});

test('NullType.encode', () => {
  expect(t.null.encode(null)).toBe(null);
});

test('NullType.is', () => {
  expect(t.null.is(null)).toBe(true);
  expect(t.null.is(0)).toBe(false);
});

test('NullType.name', () => {
  expect(t.null.name).toBe('null');
});

test('NullType.validate', () => {
  expect(t.null.validate(0, [])).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [],
        input: 0,
      },
    ],
  });
});
