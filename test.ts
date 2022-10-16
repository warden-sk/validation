/*
 * Copyright 2022 Marek Kobida
 */

import report from './report';
import { ArrayType, InterfaceType, StringType } from '.';

const l = new InterfaceType({ test: new ArrayType(new StringType()) });

const r = { test: ['marek', 0] };

const decoded = l.decode(r);

report(decoded);
