/*
 * Copyright 2022 Marek Kobida
 */

import ArrayType from './types/ArrayType';
import BooleanType from './types/primitives/BooleanType';
import InterfaceType from './types/InterfaceType';
import IntersectionType from './types/IntersectionType';
import LiteralType from './types/primitives/LiteralType';
import NullType from './types/primitives/NullType';
import NumberType from './types/primitives/NumberType';
import StringType from './types/primitives/StringType';
import TupleType from './types/TupleType';
import UndefinedType from './types/primitives/UndefinedType';
import UnionType from './types/UnionType';

const array = (...$: ConstructorParameters<typeof ArrayType>) => new ArrayType(...$);
const interfaceType = (...$: ConstructorParameters<typeof InterfaceType>) => new InterfaceType(...$);
const intersection = (...$: ConstructorParameters<typeof IntersectionType>) => new IntersectionType(...$);
const tuple = (...$: ConstructorParameters<typeof TupleType>) => new TupleType(...$);
const union = (...$: ConstructorParameters<typeof UnionType>) => new UnionType(...$);

const boolean = new BooleanType();
const literal = (of: boolean | number | string) => new LiteralType(of);
const nullType = new NullType();
const number = new NumberType();
const string = (...$: ConstructorParameters<typeof StringType>) => new StringType(...$);
const undefined = new UndefinedType();

export {
  array,
  boolean,
  interfaceType as interface,
  intersection,
  literal,
  nullType as null,
  number,
  string,
  tuple,
  undefined,
  union,
};
