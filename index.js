"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.union = exports.undefined = exports.tuple = exports.string = exports.number = exports.null = exports.literal = exports.intersection = exports.interface = exports.boolean = exports.array = void 0;
const ArrayType_1 = __importDefault(require("./types/ArrayType"));
const BooleanType_1 = __importDefault(require("./types/primitives/BooleanType"));
const InterfaceType_1 = __importDefault(require("./types/InterfaceType"));
const IntersectionType_1 = __importDefault(require("./types/IntersectionType"));
const LiteralType_1 = __importDefault(require("./types/primitives/LiteralType"));
const NullType_1 = __importDefault(require("./types/primitives/NullType"));
const NumberType_1 = __importDefault(require("./types/primitives/NumberType"));
const StringType_1 = __importDefault(require("./types/primitives/StringType"));
const TupleType_1 = __importDefault(require("./types/TupleType"));
const UndefinedType_1 = __importDefault(require("./types/primitives/UndefinedType"));
const UnionType_1 = __importDefault(require("./types/UnionType"));
const array = (...$) => new ArrayType_1.default(...$);
exports.array = array;
const interfaceType = (...$) => new InterfaceType_1.default(...$);
exports.interface = interfaceType;
const intersection = (...$) => new IntersectionType_1.default(...$);
exports.intersection = intersection;
const tuple = (...$) => new TupleType_1.default(...$);
exports.tuple = tuple;
const union = (...$) => new UnionType_1.default(...$);
exports.union = union;
const boolean = new BooleanType_1.default();
exports.boolean = boolean;
const literal = (of) => new LiteralType_1.default(of);
exports.literal = literal;
const nullType = new NullType_1.default();
exports.null = nullType;
const number = new NumberType_1.default();
exports.number = number;
const string = (...$) => new StringType_1.default(...$);
exports.string = string;
const undefined = new UndefinedType_1.default();
exports.undefined = undefined;
