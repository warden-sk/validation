import * as t from '.';

let rows = ['```typescript', "import * as t from '@warden-sk/validation';", '```'];

rows = [...rows, '# Types', '| # | Type | Test |', '| --- | --- | --- |'];

const tests: { [name: string]: string } = {
  ArrayType: 'new t.ArrayType(new t.StringType())',
  BooleanType: 'new t.BooleanType()',
  InterfaceType: 'new t.InterfaceType({ firstName: new t.StringType() })',
  IntersectionType:
    'new t.IntersectionType([ new t.InterfaceType({ firstName: new t.StringType() }), new t.InterfaceType({ lastName: new t.StringType() }), ])',
  LiteralType: "new t.LiteralType('Marek Kobida')",
  NullType: 'new t.NullType()',
  NumberType: 'new t.NumberType()',
  StringType: 'new t.StringType()',
  TupleType: 'new t.TupleType([new t.NumberType(), new t.StringType()])',
  UndefinedType: 'new t.UndefinedType()',
  UnionType: 'new t.UnionType([new t.NumberType(), new t.StringType()])',
};

for (const i in Object.keys(t)) {
  const name = Object.keys(t)[i];

  rows = [...rows, `| ${+i + 1} | ${name} | \`${tests[name]}\` |`];
}

console.log(rows.join('\n'));
