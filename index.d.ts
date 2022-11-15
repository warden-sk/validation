export type { InputOf, OutputOf, TypeOf } from './types';
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
declare const array: (of: import("./types").Any) => ArrayType<import("./types").Any>;
declare const interfaceType: (of: {
    [key: string]: import("./types").Any;
}) => InterfaceType<{
    [key: string]: import("./types").Any;
}>;
declare const intersection: (of: [import("./helpers/Type").default<any, any, unknown>, ...import("./helpers/Type").default<any, any, unknown>[]]) => IntersectionType<[import("./helpers/Type").default<any, any, unknown>, ...import("./helpers/Type").default<any, any, unknown>[]]>;
declare const tuple: (of: [import("./helpers/Type").default<any, any, unknown>, ...import("./helpers/Type").default<any, any, unknown>[]]) => TupleType<[import("./helpers/Type").default<any, any, unknown>, ...import("./helpers/Type").default<any, any, unknown>[]]>;
declare const union: (of: [import("./types").Mixed, import("./types").Mixed, ...import("./types").Mixed[]]) => UnionType<[import("./types").Mixed, import("./types").Mixed, ...import("./types").Mixed[]]>;
declare const boolean: BooleanType;
declare const literal: (of: boolean | number | string) => LiteralType<string | number | boolean>;
declare const nullType: NullType;
declare const number: NumberType;
declare const string: ($?: {
    pattern?: RegExp | undefined;
} | undefined) => StringType;
declare const undefined: UndefinedType;
export { array, boolean, interfaceType as interface, intersection, literal, nullType as null, number, string, tuple, undefined, union, };
