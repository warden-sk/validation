"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.write_file = exports.read_file = void 0;
const fs_1 = __importDefault(require("fs"));
const either_1 = require("../either");
function read_file(path) {
    return (0, either_1.tryCatch)(() => fs_1.default.readFileSync(path).toString(), () => 'Reading from file is not valid.');
}
exports.read_file = read_file;
function write_file(path) {
    return $ => (0, either_1.tryCatch)(() => fs_1.default.writeFileSync(path, $), () => 'Writing to file is not valid.');
}
exports.write_file = write_file;
