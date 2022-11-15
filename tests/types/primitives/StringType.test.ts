/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '../../..';

const type = t.string;

test('StringType.decode', () => {
  expect(type.decode('A')).toStrictEqual({
    $: 'Right',
    right: 'A',
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

test('StringType.encode', () => {
  expect(type.encode('A')).toBe('A');
});

test('StringType.is', () => {
  expect(type.is('A')).toBe(true);
  expect(type.is(0)).toBe(false);
});

test('StringType.name', () => {
  expect(type.name).toBe('string');
});

test('StringType.validate', () => {
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
