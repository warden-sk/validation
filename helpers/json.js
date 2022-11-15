"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.json_encode = exports.json_decode = void 0;
const errorMessages_1 = __importDefault(require("./errorMessages"));
const either_1 = require("../either");
function json_decode(input) {
    return (0, either_1.tryCatch)(() => JSON.parse(input), () => errorMessages_1.default.JSON_NOT_DECODABLE);
}
exports.json_decode = json_decode;
function json_encode(input) {
    return (0, either_1.tryCatch)(() => JSON.stringify(input), () => errorMessages_1.default.JSON_NOT_ENCODABLE);
}
exports.json_encode = json_encode;
