/*
 * Copyright 2022 Marek Kobida
 */

import type { TypeOf, ValidationError } from '../types';
import { isLeft, isRight } from '../Either';
import Type from '../helpers/Type';

class UnionType<Of extends Type<any>[]> extends Type<TypeOf<Of>[number]> {
  constructor(readonly of: Of) {
    super(
      of.reduce(($, type, i) => ($ += i === 0 ? type.name : ` | ${type.name}`), ''),
      //----------------------------------------------------------------------------------------------------------------
      (input): input is TypeOf<Of>[number] => of.some(type => type.is(input)),
      //----------------------------------------------------------------------------------------------------------------
      (input, context) => {
        let errors: ValidationError[] = [];
        // dokončiť "output"

        for (const key in of) {
          const type = of[key]!;

          const validation = type.validate(input, [...context, { input, key, type }]);

          if (isLeft(validation)) {
            errors = [...errors, ...validation.left];
          }

          if (isRight(validation)) {
            return this.right(input);
          }
        }

        return this.left(errors);
      }
    );
  }
}

export default UnionType;
