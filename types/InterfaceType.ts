/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../Type';
import isObject from '../isObject';
import type { TypeOf, ValidationError } from '../types';
import { isLeft } from '../Either';

class InterfaceType<Of extends { [key: string]: Type<any> }> extends Type<{ [Key in keyof Of]: TypeOf<Of[Key]> }> {
  constructor(readonly of: Of) {
    super(
      `{ ${Object.keys(of).reduce(
        ($, key, i, keys) => ($ += `${key}: ${of[key]!.name}` + (i === keys.length - 1 ? ';' : '; ')),
        ''
      )} }`,
      //----------------------------------------------------------------------------------------------------------------
      (input): input is { [Key in keyof Of]: TypeOf<Of[Key]> } =>
        isObject(input) && Object.keys(of).every(key => of[key]!.is(input[key])),
      //----------------------------------------------------------------------------------------------------------------
      (input, context) => {
        if (isObject(input)) {
          let errors: ValidationError[] = [];

          for (const key of Object.keys(of)) {
            const type = of[key]!;

            const validation = type.validate(input[key], [...context, { input: input[key], key, type }]);

            isLeft(validation) && (errors = [...errors, ...validation.left]);
          }

          return errors.length > 0 ? this.left(errors) : this.right(input as any);
        }

        return this.left([{ context, input }]);
      }
    );
  }
}

export default InterfaceType;
