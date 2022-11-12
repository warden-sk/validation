"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.json_encode = exports.json_decode = void 0;
const either_1 = require("../either");
function json_decode(input) {
    return (0, either_1.tryCatch)(() => JSON.parse(input), () => 'Decoding of JSON file is not valid.');
}
exports.json_decode = json_decode;
function json_encode(input) {
    return (0, either_1.tryCatch)(() => JSON.stringify(input), () => 'Encoding of JSON file is not valid.');
}
exports.json_encode = json_encode;
