/*
 * Copyright 2022 Marek Kobida
 */

import type { Mixed, TypeOf, ValidationError } from '../types';
import Type from '../helpers/Type';
import errorMessages from '../helpers/errorMessages';
import { isLeft } from '../either';
import typeName from '../helpers/typeName';

type TupleTypeC<Of extends [Mixed, ...Mixed[]]> = Of extends { length: 1 }
  ? [TypeOf<Of[0]>]
  : Of extends { length: 2 }
  ? [TypeOf<Of[0]>, TypeOf<Of[1]>]
  : Of extends { length: 3 }
  ? [TypeOf<Of[0]>, TypeOf<Of[1]>, TypeOf<Of[2]>]
  : Of extends { length: 4 }
  ? [TypeOf<Of[0]>, TypeOf<Of[1]>, TypeOf<Of[2]>, TypeOf<Of[3]>]
  : unknown;

class TupleType<Of extends [Mixed, ...Mixed[]]> extends Type<TupleTypeC<Of>> {
  constructor(readonly of: Of) {
    super(
      `[${typeName(of, type => type.name, ', ')}]`,
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
      () => {
        throw new Error(errorMessages.FUNCTION_NOT_IMPLEMENTED); // dokončiť
      }
    );
  }
}

export default TupleType;
