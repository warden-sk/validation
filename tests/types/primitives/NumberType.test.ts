/*
 * Copyright 2023 Marek Kobida
 */

import * as t from '../../..';

const type = t.number;

test('NumberType.decode', () => {
  expect(type.decode(0)).toStrictEqual({
    $: 'Right',
    right: 0,
  });

  expect(type.decode('A')).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [
          {
            input: 'A',
            key: '',
            type,
          },
        ],
        input: 'A',
      },
    ],
  });
});

test('NumberType.encode', () => {
  expect(type.encode(0)).toBe(0);
});

test('NumberType.is', () => {
  expect(type.is(0)).toBe(true);
  expect(type.is('A')).toBe(false);
});

test('NumberType.name', () => {
  expect(type.name).toBe('number');
});

test('NumberType.validate', () => {
  expect(type.validate('A', [])).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [],
        input: 'A',
      },
    ],
  });
});
