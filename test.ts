/*
 * Copyright 2022 Marek Kobida
 */

import report from './report';
import { InterfaceType, IntersectionType, LiteralType, NumberType, StringType } from '.';

const l = new IntersectionType([
  new InterfaceType({
    firstName: new StringType(),
    lastName: new LiteralType('Kobida'),
  }),
  new InterfaceType({
    age: new NumberType(),
  }),
]);

const r = { age: 24, firstName: 'Marek', lastName: 'Kobida' };

const decoded = l.decode(r);

report(decoded);
