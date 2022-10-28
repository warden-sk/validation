/*
 * Copyright 2022 Marek Kobida
 */

import type { TypeOf, ValidationError } from '../types';
import Type from '../Type';
import { isLeft } from '../Either';

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

          for (const key in input) {
            const validation = of.validate(input[key], [...context, { input: input[key], key, type: of }]);

            isLeft(validation) && (errors = [...errors, ...validation.left]);
          }

          return errors.length > 0 ? this.left(errors) : this.right(input);
        }

        return this.left([{ context, input }]);
      }
    );
  }
}

export default ArrayType;
