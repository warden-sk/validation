/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '.';
import type { TypeOf } from './types';
import util from 'util';

const l = new t.TupleType([
  new t.InterfaceType({
    firstName: new t.StringType(),
  }),
  new t.InterfaceType({
    lastName: new t.StringType(),
  }),
]);

type L = TypeOf<typeof l>;

const r = [{ firstName: 'Marek' }, { lastName: 'Kobida' }];

const decoded = l.decode(r);

console.log(util.inspect(decoded, { colors: true, depth: 1337 }));
