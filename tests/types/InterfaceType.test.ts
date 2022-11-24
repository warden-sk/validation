/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '../..';

const type = t.interface({ firstName: t.string, lastName: t.string });

test('InterfaceType.decode (right)', () => {
  expect(type.decode({ firstName: 'Marek', lastName: 'Kobida' })).toStrictEqual({
    $: 'Right',
    right: { firstName: 'Marek', lastName: 'Kobida' },
  });
});

test('InterfaceType.decode (left)', () => {
  expect(type.decode({ firstName: 'Marek' })).toStrictEqual({
    $: 'Left',
    left: [
      {
        context: [
          {
            input: { firstName: 'Marek' },
            key: '',
            type,
          },
          {
            input: undefined,
            key: 'lastName',
            type: t.string,
          },
        ],
        input: undefined,
      },
    ],
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

test('InterfaceType.is', () => {
  expect(type.is({ firstName: 'Marek', lastName: 'Kobida' })).toBe(true);
  expect(type.is({ firstName: 'Marek' })).toBe(false);
});

test('InterfaceType.name', () => {
  expect(type.name).toBe('{ firstName: string; lastName: string }');
});
