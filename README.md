```typescript
import * as t from '@warden-sk/validation';
```
# Types
| # | Type | Test |
| --- | --- | --- |
| 1 | ArrayType | `new t.ArrayType(new t.StringType())` |
| 2 | BooleanType | `new t.BooleanType()` |
| 3 | InterfaceType | `new t.InterfaceType({ firstName: new t.StringType() })` |
| 4 | IntersectionType | `new t.IntersectionType([\n    new t.InterfaceType({ firstName: new t.StringType() }),\n    new t.InterfaceType({ lastName: new t.StringType() }),\n])` |
| 5 | LiteralType | `new t.LiteralType('Marek Kobida')` |
| 6 | NullType | `new t.NullType()` |
| 7 | NumberType | `new t.NumberType()` |
| 8 | StringType | `new t.StringType()` |
| 9 | TupleType | `new t.TupleType([new t.NumberType(), new t.StringType()])` |
| 10 | UndefinedType | `new t.UndefinedType()` |
| 11 | UnionType | `new t.UnionType([new t.NumberType(), new t.StringType()])` |
