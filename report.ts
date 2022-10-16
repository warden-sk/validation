import type { Validation } from './types';
import { isLeft, isRight } from './functions';

function report(validation: Validation<any>) {
  if (isLeft(validation)) {
    const text = ` ${validation.left.length} Error(s)`;

    console.log(new Array(process.stdout.columns - text.length + 1).join('─') + text);

    for (const i in validation.left) {
      const { context } = validation.left[i];

      console.log([`${+i + 1} Error at`, JSON.stringify(context.map(c => c.key).join('.'))].join(' '));

      const rows = [
        ['#', 'Name', 'Type', 'Input', 'Key'],
        ...context.map((c, i) => [`${i + 1}`, c.type.$, c.type.name, JSON.stringify(c.input), c.key]),
      ];

      const columnLengths: number[] = [];
      rows.forEach(columns =>
        columns.forEach((column, i) => (columnLengths[i] ?? 0) < column.length && (columnLengths[i] = column.length))
      );

      console.log(
        [
          '╔' + new Array(process.stdout.columns - 2 + 1).join('═') + '╗',
          ...rows.map(
            columns => '║ ' + columns.map((column, i) => column.padEnd(columnLengths[i], ' ')).join(' │ ') + ' ║'
          ),
          '╚' + new Array(process.stdout.columns - 2 + 1).join('═') + '╝',
        ].join('\n')
      );
    }
  }

  if (isRight(validation)) {
    console.log(validation.right);
  }
}

export default report;
