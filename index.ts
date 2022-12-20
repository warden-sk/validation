/*
 * Copyright 2023 Marek Kobida
 */

import ArrayType from './types/ArrayType';
import BooleanType from './types/primitives/BooleanType';
import InterfaceType from './types/InterfaceType';
import IntersectionType from './types/IntersectionType';
import LiteralType from './types/primitives/LiteralType';
import type { Mixed } from './types';
import NullType from './types/primitives/NullType';
import NumberType from './types/primitives/NumberType';
import RegExpType from './types/RegExpType';
import StringType from './types/primitives/StringType';
import TupleType from './types/TupleType';
import UndefinedType from './types/primitives/UndefinedType';
import UnionType from './types/UnionType';

export type { InputOf, OutputOf, TypeOf } from './types';

const regExp = (pattern: RegExp) => new RegExpType(pattern);

const array = <Of extends Mixed>(of: Of) => new ArrayType(of);
const interfaceType = <Of extends { [key: string]: Mixed }>(of: Of) => new InterfaceType(of);
const intersection = <Of extends [Mixed, Mixed, ...Mixed[]]>(of: Of) => new IntersectionType(of);
const tuple = <Of extends [Mixed, Mixed, ...Mixed[]]>(of: Of) => new TupleType(of);
const union = <Of extends [Mixed, Mixed, ...Mixed[]]>(of: Of) => new UnionType(of);

const boolean = new BooleanType();
const literal = <Of extends boolean | number | string>(of: Of) => new LiteralType(of);
const nullType = new NullType();
const number = new NumberType();
const string = new StringType();
const undefined = new UndefinedType();

export {
  array,
  boolean,
  interfaceType as interface,
  intersection,
  literal,
  nullType as null,
  number,
  regExp,
  string,
  tuple,
  undefined,
  union,
};
