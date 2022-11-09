/*
 * Copyright 2022 Marek Kobida
 */

import type { TypeOf, ValidationError } from '../types';
import Type from '../helpers/Type';
import { isLeft } from '../Either';

type TupleTypeC<Of extends [Type<any>, ...Type<any>[]]> = Of extends { length: 1 }
  ? [TypeOf<Of[0]>]
  : Of extends { length: 2 }
  ? [TypeOf<Of[0]>, TypeOf<Of[1]>]
  : Of extends { length: 3 }
  ? [TypeOf<Of[0]>, TypeOf<Of[1]>, TypeOf<Of[2]>]
  : Of extends { length: 4 }
  ? [TypeOf<Of[0]>, TypeOf<Of[1]>, TypeOf<Of[2]>, TypeOf<Of[3]>]
  : unknown;

class TupleType<Of extends [Type<any>, ...Type<any>[]]> extends Type<TupleTypeC<Of>> {
  constructor(readonly of: Of) {
    super(
      `[${of.reduce(($, type, i) => ($ += i === 0 ? type.name : `, ${type.name}`), '')}]`,
      //----------------------------------------------------------------------------------------------------------------
      (input): input is TupleTypeC<Of> =>
        Array.isArray(input) && input.length === of.length && of.every((type, key) => type.is(input[key])),
      //----------------------------------------------------------------------------------------------------------------
      (input, context) => {
        if (Array.isArray(input)) {
          let errors: ValidationError[] = [];
          // dokončiť "output"

          for (const key in of) {
            const type = of[key]!;

            const validation = type.validate(input[key], [...context, { input: input[key], key, type }]);

            if (isLeft(validation)) {
              errors = [...errors, ...validation.left];
            }
          }

          return errors.length > 0 ? this.left(errors) : this.right(input as TupleTypeC<Of>);
        }

        return this.left([{ context, input }]);
      },
      $ => $
    );
  }
}

export default TupleType;
