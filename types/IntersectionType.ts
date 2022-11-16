/*
 * Copyright 2022 Marek Kobida
 */

import type { Mixed, TypeOf, ValidationError } from '../types';
import Type from '../helpers/Type';
import errorMessages from '../helpers/errorMessages';
import { isLeft } from '../either';
import typeName from '../helpers/typeName';

type IntersectionTypeC<Of extends [Mixed, Mixed, ...Mixed[]]> = Of extends { length: 1 }
  ? TypeOf<Of[0]>
  : Of extends { length: 2 }
  ? TypeOf<Of[0]> & TypeOf<Of[1]>
  : Of extends { length: 3 }
  ? TypeOf<Of[0]> & TypeOf<Of[1]> & TypeOf<Of[2]>
  : Of extends { length: 4 }
  ? TypeOf<Of[0]> & TypeOf<Of[1]> & TypeOf<Of[2]> & TypeOf<Of[3]>
  : unknown;

class IntersectionType<Of extends [Mixed, Mixed, ...Mixed[]]> extends Type<IntersectionTypeC<Of>> {
  constructor(readonly of: Of) {
    super(
      typeName(of, type => type.name, ' & '),
      //----------------------------------------------------------------------------------------------------------------
      (input): input is IntersectionTypeC<Of> => of.every(type => type.is(input)),
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
        }

        return errors.length > 0 ? this.left(errors) : this.right(input as IntersectionTypeC<Of>);
      },
      () => {
        throw new Error(errorMessages.FUNCTION_NOT_IMPLEMENTED); // dokončiť
      }
    );
  }
}

export default IntersectionType;
