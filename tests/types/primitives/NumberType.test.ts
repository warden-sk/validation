/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '../../../next';

test('NumberType.decode', () => {
  expect(t.number.decode(0)).toStrictEqual({
    $: 'Right',
    right: 0,
  });

  expect(t.number.decode('A')).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [
          {
            input: 'A',
            key: '',
            type: t.number,
          },
        ],
        input: 'A',
      },
    ],
  });
});

test('NumberType.encode', () => {
  expect(t.number.encode(0)).toBe(0);
});

test('NumberType.is', () => {
  expect(t.number.is(0)).toBe(true);
  expect(t.number.is('A')).toBe(false);
});

test('NumberType.name', () => {
  expect(t.number.name).toBe('number');
});

test('NumberType.validate', () => {
  expect(t.number.validate('A', [])).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [],
        input: 'A',
      },
    ],
  });
});
