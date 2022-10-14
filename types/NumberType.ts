/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../Type';

class NumberType extends Type<number> {
  constructor() {
    super(
      'number',
      (input): input is number => typeof input === 'number',
      (input, context) => (this.is(input) ? this.right(input) : this.left(input, context))
    );
  }
}

export default NumberType;
