import StringType from '../../../types/primitives/StringType';

const type = new StringType();

test('StringType.decode', () => {
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

  expect(type.decode('A')).toStrictEqual({
    $: 'Right',
    right: 'A',
  });
});

test('StringType.encode', () => {
  expect(type.encode('A')).toBe('A');
});

test('StringType.is', () => {
  expect(type.is(0)).toBe(false);
  expect(type.is('A')).toBe(true);
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
