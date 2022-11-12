"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
function typeName(keys, on, $) {
    return keys.reduce(($$, key, i) => ($$ += i === 0 ? on(key) : $ + on(key)), '');
}
exports.default = typeName;
