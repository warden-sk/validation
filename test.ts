/*
 * Copyright 2022 Marek Kobida
 */

import report from './report';
import * as t from '.';
import type { TypeOf } from './types';

const l = new t.UnionType([
  new t.InterfaceType({
    firstName: new t.StringType(),
  }),
  new t.InterfaceType({
    lastName: new t.StringType(),
  }),
]);

type L = TypeOf<typeof l>;

const r = { lastName: 'Kobida' };

const decoded = l.decode(r);

report(decoded);
