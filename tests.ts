/*
 * Copyright 2022 Marek Kobida
 */

import ArrayType from './types/ArrayType';
import InterfaceType from './types/InterfaceType';
import IntersectionType from './types/IntersectionType';
import StringType from './types/primitives/StringType';
import type Type from './helpers/Type';
import { strict as assert } from 'assert';

test(
  new ArrayType(new IntersectionType([new InterfaceType({ firstName: new StringType() })])),
  () => [{ firstName: 'Marek', lastName: 'Kobida' }],
  () => ({ $: 'Right', right: [{ firstName: 'Marek' }] })
);

function test<T, L, R>(t: Type<T, L>, l: () => L, r: () => R) {
  assert.deepEqual(t.decode(l()), r());
}
