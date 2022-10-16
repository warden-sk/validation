import * as types from '.';

let rows = ['# Types', '| # | Type |', '| --- | --- |'];

for (const i in Object.keys(types)) {
  rows = [...rows, `| ${+i + 1} | ${Object.keys(types)[i]} |`];
}

console.log(rows.join('\n'));
