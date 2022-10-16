/*
 * Copyright 2022 Marek Kobida
 */

import ArrayType from './types/ArrayType';
import StringType from './types/StringType';
import InterfaceType from './types/InterfaceType';
import { isLeft, isRight } from './functions';

const l = new InterfaceType({ test: new ArrayType(new StringType()) });

const r = { test: [] };

const decoded = l.decode(r);

if (isLeft(decoded)) {
  const text = ` ${decoded.left.length} Error(s)`;

  console.log(new Array(process.stdout.columns - text.length + 1).join('\u2014') + text);

  for (const i in decoded.left) {
    const { context } = decoded.left[i];

    console.log([`${+i + 1} Error at`, JSON.stringify(context.map(c => c.key).join('.'))].join(' '));

    console.log(new Array(process.stdout.columns + 1).join('\u2013'));

    const rows = [
      ['#', 'Name', 'Type', 'Input', 'Key'],
      ...context.map((c, i) => [`${i + 1}`, c.type.$, c.type.name, JSON.stringify(c.input), c.key]),
    ];

    const columnLengths: number[] = [];
    rows.forEach(columns =>
      columns.forEach((column, i) => (columnLengths[i] ?? 0) < column.length && (columnLengths[i] = column.length))
    );

    console.log(
      rows
        .map(
          columns =>
            '\u007C ' + columns.map((column, i) => column.padEnd(columnLengths[i], ' ')).join(' \u007C ') + ' \u007C'
        )
        .join('\n')
    );

    console.log(new Array(process.stdout.columns + 1).join('\u2014'));
  }
}

if (isRight(decoded)) {
  console.log(decoded.right);
}
