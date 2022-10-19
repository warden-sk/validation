/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../Type';
import type { TypeOf, ValidationError } from '../types';
import { isLeft } from '../functions';

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type Test<U> = U extends (infer E)[] ? TypeOf<E>[] : never;

class IntersectionType<Of extends Type<any>[]> extends Type<UnionToIntersection<Test<Of>[number]>> {
  readonly $: 'IntersectionType' = 'IntersectionType';

  constructor(readonly of: Of) {
    super(
      of.reduce(($, type, i) => ($ += i === 0 ? type.name : ` & ${type.name}`), ''),
      (input): input is UnionToIntersection<Test<Of>[number]> => of.every(type => type.is(input)),
      (input, context) => {
        let errors: ValidationError[] = [];

        for (const key in of) {
          const $ = of[key].validate(input, [...context, { input: input, key, type: of[key] }]);

          if (isLeft($)) {
            errors = [...errors, ...$.left];
          }
        }

        return errors.length > 0 ? this.left(errors) : this.right(input as any);
      }
    );
  }
}

export default IntersectionType;
