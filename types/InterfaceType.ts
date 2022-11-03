/*
 * Copyright 2022 Marek Kobida
 */

import type { TypeOf, ValidationError } from '../types';
import { isLeft, isRight } from '../Either';
import Type from '../Type';
import isObject from '../isObject';

class InterfaceType<Of extends { [key: string]: Type<any> }> extends Type<{ [Key in keyof Of]: TypeOf<Of[Key]> }> {
  constructor(readonly of: Of) {
    super(
      `{ ${Object.keys(of).reduce(
        ($, key, i) => ($ += i === 0 ? `${key}: ${of[key]!.name}` : `; ${key}: ${of[key]!.name}`),
        ''
      )} }`,
      //----------------------------------------------------------------------------------------------------------------
      (input): input is { [Key in keyof Of]: TypeOf<Of[Key]> } =>
        isObject(input) && Object.keys(of).every(key => of[key]!.is(input[key])),
      //----------------------------------------------------------------------------------------------------------------
      (input, context) => {
        if (isObject(input)) {
          let errors: ValidationError[] = [];
          const output: { [Key in keyof typeof input]: typeof input[Key] } = {};

          for (const key of Object.keys(of)) {
            const type = of[key]!;

            const validation = type.validate(input[key], [...context, { input: input[key], key, type }]);

            if (isLeft(validation)) {
              errors = [...errors, ...validation.left];
            }

            if (isRight(validation)) {
              output[key] = input[key];
            }
          }

          return errors.length > 0 ? this.left(errors) : this.right(output as { [Key in keyof Of]: TypeOf<Of[Key]> });
        }

        return this.left([{ context, input }]);
      }
    );
  }
}

export default InterfaceType;
