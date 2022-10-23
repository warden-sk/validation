/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '.';
import type { TypeOf } from './types';
import util from 'util';

const l = new t.TupleType([
  new t.InterfaceType({
    id: new t.UnionType([new t.NumberType(), new t.StringType()]),
  }),
  new t.InterfaceType({
    firstName: new t.StringType(),
    lastName: new t.StringType(),
  }),
]);

type L = TypeOf<typeof l>;

const r = [{ id: 0 }, { firstName: 'Marek', lastName: 'Kobida' }];

const decoded = l.decode(r);

console.log(util.inspect(decoded, { colors: true, depth: 1337 }));
