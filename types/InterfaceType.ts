/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../Type';
import type { TypeOf, ValidationError } from '../types';
import { isLeft } from '../functions';
import isObject from '../isObject';

class InterfaceType<Of extends { [key: string]: Type<any> }> extends Type<{ [Key in keyof Of]: TypeOf<Of[Key]> }> {
  readonly $: 'InterfaceType' = 'InterfaceType';

  constructor(readonly of: Of) {
    super(
      `{${Object.keys(of).map(key => `${key}:${of[key].name};`)}}`,
      (input): input is { [Key in keyof Of]: TypeOf<Of[Key]> } => {
        if (isObject(input)) {
          for (const key of Object.keys(of)) {
            if (!of[key].is(input[key])) {
              return false;
            }
          }

          return true;
        }

        return false;
      },
      (input, context) => {
        if (isObject(input)) {
          let errors: ValidationError[] = [];

          for (const key of Object.keys(of)) {
            const $ = of[key].validate(input[key], [...context, { input: input[key], key, type: of[key] }]);

            if (isLeft($)) {
              errors = [...errors, ...$.left];
            }
          }

          return errors.length > 0 ? this.left(errors) : this.right(input as any);
        }

        return this.left([{ context, input }]);
      }
    );
  }
}

export default InterfaceType;