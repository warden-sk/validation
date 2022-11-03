/*
 * Copyright 2022 Marek Kobida
 */

import type { TypeOf, ValidationError } from '../types';
import { isLeft, isRight } from '../Either';
import Type from '../helpers/Type';

type IntersectionTypeC<Of extends [Type<any>, ...Type<any>[]]> = Of extends { length: 1 }
  ? TypeOf<Of[0]>
  : Of extends { length: 2 }
  ? TypeOf<Of[0]> & TypeOf<Of[1]>
  : Of extends { length: 3 }
  ? TypeOf<Of[0]> & TypeOf<Of[1]> & TypeOf<Of[2]>
  : Of extends { length: 4 }
  ? TypeOf<Of[0]> & TypeOf<Of[1]> & TypeOf<Of[2]> & TypeOf<Of[3]>
  : unknown;

class IntersectionType<Of extends [Type<any>, ...Type<any>[]]> extends Type<IntersectionTypeC<Of>> {
  constructor(readonly of: Of) {
    super(
      of.reduce(($, type, i) => ($ += i === 0 ? type.name : ` & ${type.name}`), ''),
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
      }
    );
  }
}

export default IntersectionType;
