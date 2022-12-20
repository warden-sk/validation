/*
 * Copyright 2023 Marek Kobida
 */

import * as t from '../../..';

test('BooleanType.decode', () => {
  expect(t.boolean.decode(true)).toStrictEqual({
    $: 'Right',
    right: true,
  });

  expect(t.boolean.decode(0)).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [
          {
            input: 0,
            key: '',
            type: t.boolean,
          },
        ],
        input: 0,
      },
    ],
  });
});

test('BooleanType.encode', () => {
  expect(t.boolean.encode(true)).toBe(true);
});

test('BooleanType.is', () => {
  expect(t.boolean.is(true)).toBe(true);
  expect(t.boolean.is(0)).toBe(false);
});

test('BooleanType.name', () => {
  expect(t.boolean.name).toBe('boolean');
});

test('BooleanType.validate', () => {
  expect(t.boolean.validate(0, [])).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [],
        input: 0,
      },
    ],
  });
});
