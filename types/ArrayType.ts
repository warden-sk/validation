/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../Type';
import type { TypeOf, ValidationError } from '../types';
import { isLeft } from '../functions';

class ArrayType<Of extends Type<any>> extends Type<TypeOf<Of>[]> {
  readonly $: 'ArrayType' = 'ArrayType';

  constructor(readonly of: Of) {
    super(
      `${of.name}[]`,
      //----------------------------------------------------------------------------------------------------------------
      (input): input is TypeOf<Of>[] => Array.isArray(input) && input.every(of.is),
      //----------------------------------------------------------------------------------------------------------------
      (input, context) => {
        if (Array.isArray(input)) {
          let errors: ValidationError[] = [];

          for (const i in input) {
            const validation = of.validate(input[i], [...context, { input: input[i], key: i, type: of }]);

            if (isLeft(validation)) {
              errors = [...errors, ...validation.left];
            }
          }

          return errors.length > 0 ? this.left(errors) : this.right(input);
        }

        return this.left([{ context, input }]);
      }
    );
  }
}

export default ArrayType;
