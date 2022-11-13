/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '../../next';

const type = t.array(t.string());

test('ArrayType.decode', () => {
  expect(type.decode(['Marek Kobida'])).toStrictEqual({
    $: 'Right',
    right: ['Marek Kobida'],
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
