import * as t from '.';

let rows = ['```typescript', "import * as t from '@warden-sk/validation';", '```'];

rows = [...rows, '# Types', '| # | Type |', '| --- | --- |'];

for (const i in Object.keys(t)) {
  const name = Object.keys(t)[i];

  rows = [...rows, `| ${+i + 1} | ${name} |`];
}

console.log(rows.join('\n'));
