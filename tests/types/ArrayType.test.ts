/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '../..';

const type = t.array(t.string);

test('ArrayType.decode (left)', () => {
  expect(type.decode(['Marek', 'Kobida'])).toStrictEqual({
    $: 'Right',
    right: ['Marek', 'Kobida'],
  });

  expect(type.decode([])).toStrictEqual({
    $: 'Right',
    right: [],
  });
});

test('ArrayType.decode (right)', () => {
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

  expect(type.decode([0])).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [
          {
            input: [0],
            key: '',
            type,
          },
          {
            input: 0,
            key: '0',
            type: t.string,
          },
        ],
        input: 0,
      },
    ],
  });
});

test('ArrayType.is', () => {
  expect(type.is(['Marek', 'Kobida'])).toBe(true);
  expect(type.is([])).toBe(true);

  expect(type.is(0)).toBe(false);
  expect(type.is([0])).toBe(false);
});

test('ArrayType.name', () => {
  expect(type.name).toBe('string[]');
});
