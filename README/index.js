"use strict";
/*
 * Copyright 2022 Marek Kobida
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const t = __importStar(require(".."));
const fs_1 = __importDefault(require("fs"));
async function $() {
    let rows = ['# validation'];
    rows = [...rows, '', '```typescript', "import * as t from '@warden-sk/validation';", '```'];
    rows = [...rows, '', '## Types', '| # | Type |', '| ---: | ---: |'];
    for (const i in Object.keys(t)) {
        const name = Object.keys(t)[i];
        rows = [...rows, `| ${+i + 1} | [${name}](#${name.toLocaleLowerCase()}) |`];
    }
    const files = [
        ['ArrayType', 2, 2],
        ['InterfaceType', 2, 4],
        ['IntersectionType', 2, 9],
        ['LiteralType', 2, 2],
        ['TupleType', 2, 2],
        ['UnionType', 2, 9],
    ];
    for await (const [fileName, from, to] of files) {
        rows = [...rows, '', `### ${fileName}`, '```typescript'];
        const file = fs_1.default.readFileSync(`./README/${fileName}.ts`).toString();
        rows = [...rows, ...file.split(/\n/).filter((row, i) => i >= from && i <= to)];
        const type = await Promise.resolve().then(() => __importStar(require(`./${fileName}.ts`)));
        rows = [...rows, '', 'type T = t.TypeOf<typeof type>;', `// type T = ${type.default.name};`];
        rows = [...rows, '```'];
    }
    fs_1.default.writeFileSync('./README.md', rows.join('\n'));
}
$();
