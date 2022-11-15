/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../../helpers/Type';
import identity from '../../helpers/identity';

class StringType extends Type<string> {
  constructor(readonly $: { pattern?: RegExp } = {}) {
    super(
      'string',
      (input): input is string => typeof input === 'string',
      (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }])),
      identity
    );
  }
}

export default StringType;
