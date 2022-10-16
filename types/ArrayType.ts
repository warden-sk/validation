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
      (input): input is TypeOf<Of>[] => {
        if (Array.isArray(input)) {
          for (const key in input) {
            if (!of.is(input[key])) {
              return false;
            }
          }

          return true;
        }

        return false;
      },
      (input, context) => {
        if (Array.isArray(input)) {
          let errors: ValidationError[] = [];

          for (const i in input) {
            const $ = of.validate(input[i], [...context, { input: input[i], key: i, type: of }]);

            if (isLeft($)) {
              errors = [...errors, ...$.left];
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
