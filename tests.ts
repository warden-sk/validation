/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '.';
import type Type from './helpers/Type';
import { strict as assert } from 'assert';

test(
  new t.InterfaceType({
    name: new t.UnionType([new t.StringType(), new t.UndefinedType()]),
  }),
  () => ({ name: 'Marek Kobida' }),
  () => ({ $: 'Right', right: { firstName: 'Marek' } })
);

function test<T, L, R>(t: Type<T, L>, l: () => L, r: () => R) {
  assert.deepEqual(t.decode(l()), r());
}

const $ = new t.UnionType([new t.StringType(), new t.NumberType()]);

type A = t.TypeOf<typeof $>;
