/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../Type';
import type { TypeOf, ValidationError } from '../types';
import { isLeft } from '../functions';

class UnionType<Of extends Type<any>[]> extends Type<TypeOf<Of>[number]> {
  readonly $: 'UnionType' = 'UnionType';

  constructor(readonly of: Of) {
    super(
      of.reduce(($, type, i) => ($ += i === 0 ? type.name : ` | ${type.name}`), ''),
      //----------------------------------------------------------------------------------------------------------------
      (input): input is TypeOf<Of>[number] => of.some(type => type.is(input)),
      //----------------------------------------------------------------------------------------------------------------
      (input, context) => {
        let errors: ValidationError[] = [];

        for (const key in of) {
          const validation = of[key].validate(input, [...context, { input: input, key, type: of[key] }]);

          if (isLeft(validation)) {
            errors = [...errors, ...validation.left];
          } else {
            return this.right(input);
          }
        }

        return this.left(errors);
      }
    );
  }
}

export default UnionType;
