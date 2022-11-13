/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '../../../next';

test('StringType.decode', () => {
  expect(t.string().decode('A')).toStrictEqual({
    $: 'Right',
    right: 'A',
  });

  expect(t.string().decode(0)).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [
          {
            input: 0,
            key: '',
            type: t.string(),
          },
        ],
        input: 0,
      },
    ],
  });
});

test('StringType.decode with RegExp pattern', () => {
  const type = t.string({ pattern: /[0-9]+/ });

  expect(type.decode('0')).toStrictEqual({
    $: 'Right',
    right: '0',
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
  expect(t.string().encode('A')).toBe('A');
});

test('StringType.is', () => {
  expect(t.string().is('A')).toBe(true);
  expect(t.string().is(0)).toBe(false);
});

test('StringType.name', () => {
  expect(t.string().name).toBe('string');
});

test('StringType.validate', () => {
  expect(t.string().validate(0, [])).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [],
        input: 0,
      },
    ],
  });
});
