"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.union = exports.undefined = exports.tuple = exports.string = exports.regExp = exports.number = exports.null = exports.literal = exports.intersection = exports.interface = exports.boolean = exports.array = void 0;
const ArrayType_1 = __importDefault(require("./types/ArrayType"));
const BooleanType_1 = __importDefault(require("./types/primitives/BooleanType"));
const InterfaceType_1 = __importDefault(require("./types/InterfaceType"));
const IntersectionType_1 = __importDefault(require("./types/IntersectionType"));
const LiteralType_1 = __importDefault(require("./types/primitives/LiteralType"));
const NullType_1 = __importDefault(require("./types/primitives/NullType"));
const NumberType_1 = __importDefault(require("./types/primitives/NumberType"));
const RegExpType_1 = __importDefault(require("./types/RegExpType"));
const StringType_1 = __importDefault(require("./types/primitives/StringType"));
const TupleType_1 = __importDefault(require("./types/TupleType"));
const UndefinedType_1 = __importDefault(require("./types/primitives/UndefinedType"));
const UnionType_1 = __importDefault(require("./types/UnionType"));
const regExp = (pattern) => new RegExpType_1.default(pattern);
exports.regExp = regExp;
const array = (of) => new ArrayType_1.default(of);
exports.array = array;
const interfaceType = (of) => new InterfaceType_1.default(of);
exports.interface = interfaceType;
const intersection = (of) => new IntersectionType_1.default(of);
exports.intersection = intersection;
const tuple = (of) => new TupleType_1.default(of);
exports.tuple = tuple;
const union = (of) => new UnionType_1.default(of);
exports.union = union;
const boolean = new BooleanType_1.default();
exports.boolean = boolean;
const literal = (of) => new LiteralType_1.default(of);
exports.literal = literal;
const nullType = new NullType_1.default();
exports.null = nullType;
const number = new NumberType_1.default();
exports.number = number;
const string = new StringType_1.default();
exports.string = string;
const undefined = new UndefinedType_1.default();
exports.undefined = undefined;
