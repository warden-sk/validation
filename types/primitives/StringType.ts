/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../../helpers/Type';
import UndefinedType from './UndefinedType';
import identity from '../../helpers/identity';

class StringType extends Type<string> {
  constructor({ pattern }: { pattern?: RegExp } = {}) {
    super(
      'string',
      (input): input is string => {
        if (typeof input === 'string') {
          return !(!new UndefinedType().is(pattern) && !pattern.test(input));
        }

        return false;
      },
      (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }])),
      identity
    );
  }
}

export default StringType;
