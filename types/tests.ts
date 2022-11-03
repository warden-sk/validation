/*
 * Copyright 2022 Marek Kobida
 */

import ArrayType from './ArrayType';
import InterfaceType from './InterfaceType';
import IntersectionType from './IntersectionType';
import StringType from './primitives/StringType';
import { strict as assert } from 'assert';

const arrayOfString = new ArrayType(new IntersectionType([new InterfaceType({ firstName: new StringType() })]));

test(
  arrayOfString.decode,
  () => [{ firstName: 'Marek', lastName: 'Kobida' }],
  () => ({ $: 'Right', right: [{ firstName: 'Marek' }] })
);

function test<T, L, R>(t: (l: L) => T, l: () => L, r: () => R) {
  assert.deepEqual(t(l()), r());
}
