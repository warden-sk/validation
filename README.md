# validation

```typescript
import * as t from '@warden-sk/validation';
```

## Types
| # | Type |
| ---: | ---: |
| 1 | ArrayType |
| 2 | BooleanType |
| 3 | InterfaceType |
| 4 | IntersectionType |
| 5 | LiteralType |
| 6 | NullType |
| 7 | NumberType |
| 8 | StringType |
| 9 | TupleType |
| 10 | UndefinedType |
| 11 | UnionType |

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
