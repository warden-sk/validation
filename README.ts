import * as types from '.';

let rows = ['```typescript', "import { ArrayType } from '@warden-sk/validation';", '```'];

rows = [...rows, '# Types', '| # | Type |', '| --- | --- |'];

for (const i in Object.keys(types)) {
  rows = [...rows, `| ${+i + 1} | ${Object.keys(types)[i]} |`];
}

console.log(rows.join('\n'));
