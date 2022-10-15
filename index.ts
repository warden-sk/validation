/*
 * Copyright 2022 Marek Kobida
 */

import ArrayType from './types/ArrayType';
import StringType from './types/StringType';
import util from 'util';
import InterfaceType from './types/InterfaceType';

const l = new InterfaceType({ test: new ArrayType(new StringType()) });

const r = { test: ['marek'] };

console.log(util.inspect(l.decode(r), { colors: true, depth: 1337 }));
