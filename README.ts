/*
 * Copyright 2022 Marek Kobida
 */

import * as t from '.';
import fs from 'fs';

async function $() {
  let rows = ['```typescript', "import * as t from '@warden-sk/validation';", '```'];

  rows = [...rows, '', '## Types', '| # | Type |', '| ---: | ---: |'];

  for (const i in Object.keys(t)) {
    const name = Object.keys(t)[i];

    rows = [...rows, `| ${+i + 1} | ${name} |`];
  }

  const files: [keyof typeof t, number, number][] = [
    ['ArrayType', 2, 2],
    ['InterfaceType', 2, 4],
    ['IntersectionType', 2, 9],
    ['LiteralType', 2, 2],
    ['TupleType', 2, 2],
    ['UnionType', 2, 9],
  ];

  for await (const [fileName, from, to] of files) {
    rows = [...rows, '', `### ${fileName}`, '```typescript'];

    const file = fs.readFileSync(`./README/${fileName}.ts`).toString();
    rows = [...rows, ...file.split(/\n/).filter((row, i) => i >= from && i <= to)];

    const type = await import(`./README/${fileName}.ts`);
    rows = [...rows, '', `type T = t.TypeOf<typeof type>; // ${type.default.name}`];

    rows = [...rows, '```'];
  }

  rows = [...rows, '', '## Motivácia', '> Text nie je k dispozícii.'];

  console.log(rows.join('\n'));
}

$();
