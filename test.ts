/*
 * Copyright 2022 Marek Kobida
 */

import report from './report';
import * as t from '.';

const l = new t.UnionType([new t.NumberType(), new t.StringType()]);

const r = 1;

const decoded = l.decode(r);

report(decoded);
