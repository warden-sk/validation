/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '../../../next';

test('UndefinedType.decode', () => {
  expect(t.undefined.decode(undefined)).toStrictEqual({
    $: 'Right',
    right: undefined,
  });

  expect(t.undefined.decode(0)).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [
          {
            input: 0,
            key: '',
            type: t.undefined,
          },
        ],
        input: 0,
      },
    ],
  });
});

test('UndefinedType.encode', () => {
  expect(t.undefined.encode(undefined)).toBe(undefined);
});

test('UndefinedType.is', () => {
  expect(t.undefined.is(undefined)).toBe(true);
  expect(t.undefined.is(0)).toBe(false);
});

test('UndefinedType.name', () => {
  expect(t.undefined.name).toBe('undefined');
});

test('UndefinedType.validate', () => {
  expect(t.undefined.validate(0, [])).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [],
        input: 0,
      },
    ],
  });
});
