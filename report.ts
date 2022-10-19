/*
 * Copyright 2022 Marek Kobida
 */

import type { Validation } from './types';
import { isLeft, isRight } from './functions';

function report(validation: Validation<any>) {
  if (isLeft(validation)) {
    console.log(`${validation.left.length} Error(s)`);

    for (const i in validation.left) {
      const { context } = validation.left[i];

      console.log([`${+i + 1} Error at`, JSON.stringify(context.map(c => c.key).join('.'))].join(' '));

      const rows = [
        ['#', 'Name', 'Type', 'Input', 'Key'],
        ...context.map((c, i) => [`${i + 1}`, c.type.$, c.type.name, JSON.stringify(c.input), c.key]),
      ];

      const columnLengths: number[] = [];
      rows.forEach(columns =>
        columns.forEach((column, i) => {
          const columnLength = column.length;
          return (columnLengths[i] ?? 0) < columnLength && (columnLengths[i] = columnLength);
        })
      );

      function replaceAtIndex(input: string, $: string) {
        const updatedLengths: number[] = columnLengths
          .map(
            (
              first => columnLength =>
                (first += columnLength + 3)
            )(0)
          )
          .filter((columnLength, i, columnLengths) => i < columnLengths.length - 1);

        return [...input].reduce(
          (s, character, i) => (s += updatedLengths.indexOf(i) !== -1 ? (character = $) : character),
          ''
        );
      }

      const WidthOfTable = columnLengths.reduce((n, length) => n + length + 3, 0);

      const TableHeader = replaceAtIndex('╔' + new Array(WidthOfTable).join('═') + '╗', '╤');
      const TableFooter = replaceAtIndex('╚' + new Array(WidthOfTable).join('═') + '╝', '╧');

      console.log(
        [
          TableHeader,
          ...rows
            .flatMap((columns, i) => [
              '║ ' + columns.map((column, i) => column.padEnd(columnLengths[i], ' ')).join(' │ ') + ' ║',
              i === rows.length - 1 ? undefined : replaceAtIndex('╟' + new Array(WidthOfTable).join('─') + '╢', '┼'),
            ])
            .filter(i => i !== undefined),
          TableFooter,
        ].join('\n')
      );
    }
  }

  if (isRight(validation)) {
    console.log(validation.right);
  }
}

export default report;
