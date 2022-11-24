/*
 * Copyright 2022 Marek Kobida
 */

import type { Mixed, OutputOf, TypeOf, ValidationError } from '../types';
import Type from '../helpers/Type';
import errorMessages from '../helpers/errorMessages';
import { isLeft } from '../either';

class ArrayType<Of extends Mixed> extends Type<TypeOf<Of>[], OutputOf<Of>[], unknown> {
  constructor(readonly of: Of) {
    super(
      `${of.name}[]`,
      //----------------------------------------------------------------------------------------------------------------
      (input): input is TypeOf<Of>[] => Array.isArray(input) && input.every(of.is),
      //----------------------------------------------------------------------------------------------------------------
      (input, context) => {
        if (Array.isArray(input)) {
          let errors: ValidationError[] = [];

          for (const key in input) {
            const validation = of.validate(input[key], [...context, { input: input[key], key, type: of }]);

            if (isLeft(validation)) {
              errors = [...errors, ...validation.left];
            }
          }

          return errors.length > 0 ? this.left(errors) : this.right(input);
        }

        return this.left([{ context, input }]);
      },
      () => {
        throw new Error(errorMessages.FUNCTION_NOT_IMPLEMENTED); // dokončiť
      }
    );
  }
}

export default ArrayType;
