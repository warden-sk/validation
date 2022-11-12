"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
const either_1 = require("../either");
class Type {
    name;
    is;
    validate;
    encode;
    INPUT; // typescript
    OUTPUT; // typescript
    TYPE; // typescript
    constructor(name, is, validate, encode) {
        this.name = name;
        this.is = is;
        this.validate = validate;
        this.encode = encode;
    }
    decode = (input) => {
        return this.validate(input, [{ input, key: '', type: this }]);
    };
    left(errors) {
        return (0, either_1.left)(errors);
    }
    right(type) {
        return (0, either_1.right)(type);
    }
}
exports.default = Type;
