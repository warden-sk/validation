# validation

```typescript
import * as t from '@warden-sk/validation';
```

## Types
| # | Type |
| ---: | ---: |
| 1 | [array](#array) |
| 2 | [boolean](#boolean) |
| 3 | [interface](#interface) |
| 4 | [intersection](#intersection) |
| 5 | [literal](#literal) |
| 6 | [null](#null) |
| 7 | [number](#number) |
| 8 | [string](#string) |
| 9 | [tuple](#tuple) |
| 10 | [undefined](#undefined) |
| 11 | [union](#union) |

### ArrayType
```typescript
const type = t.array(t.string());

type T = t.TypeOf<typeof type>;
// type T = string[];
```

### InterfaceType
```typescript
const type = t.interface({
  firstName: t.string(),
});

type T = t.TypeOf<typeof type>;
// type T = { firstName: string };
```

### IntersectionType
```typescript
const type = t.intersection([
  t.interface({
    firstName: t.string(),
  }),
  t.interface({
    lastName: t.string(),
  }),
]);

type T = t.TypeOf<typeof type>;
// type T = { firstName: string } & { lastName: string };
```

### LiteralType
```typescript
const type = t.literal('Marek Kobida');

type T = t.TypeOf<typeof type>;
// type T = "Marek Kobida";
```

### TupleType
```typescript
const type = t.tuple([t.number, t.string()]);

type T = t.TypeOf<typeof type>;
// type T = [number, string];
```

### UnionType
```typescript
const type = t.union([
  t.interface({
    firstName: t.string(),
  }),
  t.interface({
    lastName: t.string(),
  }),
]);

type T = t.TypeOf<typeof type>;
// type T = { firstName: string } | { lastName: string };
```