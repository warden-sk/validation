/*
 * Copyright 2022 Marek Kobida
 */

import type { TypeOf, ValidationError } from '../types';
import { isLeft, isRight } from '../Either';
import Type from '../helpers/Type';
import identity from '../helpers/identity';

class ArrayType<Of extends Type<any>> extends Type<TypeOf<Of>[]> {
  constructor(readonly of: Of) {
    super(
      `${of.name}[]`,
      //----------------------------------------------------------------------------------------------------------------
      (input): input is TypeOf<Of>[] => Array.isArray(input) && input.every(of.is),
      //----------------------------------------------------------------------------------------------------------------
      (input, context) => {
        if (Array.isArray(input)) {
          let errors: ValidationError[] = [];
          const output: TypeOf<Of>[] = [];

          for (const key in input) {
            const validation = of.validate(input[key], [...context, { input: input[key], key, type: of }]);

            if (isLeft(validation)) {
              errors = [...errors, ...validation.left];
            }

            if (isRight(validation)) {
              output[key] = validation.right;
            }
          }

          return errors.length > 0 ? this.left(errors) : this.right(output);
        }

        return this.left([{ context, input }]);
      },
      identity
    );
  }
}

export default ArrayType;
