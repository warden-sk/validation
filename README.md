# validation

```typescript
import * as t from '@warden-sk/validation';
```

## Types
| # | Type |
| ---: | ---: |
| 1 | [ArrayType](#arraytype) |
| 2 | [BooleanType](#booleantype) |
| 3 | [InterfaceType](#interfacetype) |
| 4 | [IntersectionType](#intersectiontype) |
| 5 | [LiteralType](#literaltype) |
| 6 | [NullType](#nulltype) |
| 7 | [NumberType](#numbertype) |
| 8 | [StringType](#stringtype) |
| 9 | [TupleType](#tupletype) |
| 10 | [UndefinedType](#undefinedtype) |
| 11 | [UnionType](#uniontype) |

### ArrayType
```typescript
const type = new t.ArrayType(new t.StringType());

type T = t.TypeOf<typeof type>;
// type T = string[];
```

### InterfaceType
```typescript
const type = new t.InterfaceType({
  firstName: new t.StringType(),
});

type T = t.TypeOf<typeof type>;
// type T = { firstName: string };
```

### IntersectionType
```typescript
const type = new t.IntersectionType([
  new t.InterfaceType({
    firstName: new t.StringType(),
  }),
  new t.InterfaceType({
    lastName: new t.StringType(),
  }),
]);

type T = t.TypeOf<typeof type>;
// type T = { firstName: string } & { lastName: string };
```

### LiteralType
```typescript
const type = new t.LiteralType('Marek Kobida');

type T = t.TypeOf<typeof type>;
// type T = "Marek Kobida";
```

### TupleType
```typescript
const type = new t.TupleType([new t.NumberType(), new t.StringType()]);

type T = t.TypeOf<typeof type>;
// type T = [number, string];
```

### UnionType
```typescript
const type = new t.UnionType([
  new t.InterfaceType({
    firstName: new t.StringType(),
  }),
  new t.InterfaceType({
    lastName: new t.StringType(),
  }),
]);

type T = t.TypeOf<typeof type>;
// type T = { firstName: string } | { lastName: string };
```