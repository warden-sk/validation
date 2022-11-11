/*
 * Copyright 2022 Marek Kobida
 */

import type { Mixed, OutputOf, TypeOf, ValidationError } from '../types';
import { isLeft, isRight } from '../either';
import Type from '../helpers/Type';
import identity from '../helpers/identity';

//                         minimálne 2
class UnionType<Of extends [Mixed, Mixed, ...Mixed[]]> extends Type<TypeOf<Of[number]>, OutputOf<Of[number]>, unknown> {
  constructor(readonly of: Of) {
    super(
      Type.typeName(of, type => type.name, ' | '),
      //----------------------------------------------------------------------------------------------------------------
      (input): input is TypeOf<Of[number]> => of.some(type => type.is(input)),
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
      },
      identity
    );
  }
}

export default UnionType;
