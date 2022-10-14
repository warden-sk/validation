/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../Type';

class StringType extends Type<string> {
  constructor() {
    super(
      'string',
      (input): input is string => typeof input === 'string',
      (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }]))
    );
  }
}

export default StringType;
