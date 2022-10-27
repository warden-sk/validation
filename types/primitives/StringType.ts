/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../../Type';
import UndefinedType from './UndefinedType';

class StringType extends Type<string> {
  readonly $: 'StringType' = 'StringType';

  constructor({ pattern }: { pattern?: RegExp } = {}) {
    super(
      'string',
      (input): input is string => {
        if (typeof input === 'string') {
          return !(!new UndefinedType().is(pattern) && !pattern.test(input));
        }

        return false;
      },
      (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }]))
    );
  }
}

export default StringType;
