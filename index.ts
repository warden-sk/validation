/*
 * Copyright 2022 Marek Kobida
 */

import ArrayType from './types/ArrayType';
import StringType from './types/StringType';
import InterfaceType from './types/InterfaceType';
import report from './report';

const l = new InterfaceType({ test: new ArrayType(new StringType()) });

const r = { test: ['marek', 0] };

const decoded = l.decode(r);

report(decoded);
