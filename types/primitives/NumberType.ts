/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../../helpers/Type';
import identity from '../../helpers/identity';

class NumberType extends Type<number> {
  constructor() {
    super(
      'number',
      (input): input is number => typeof input === 'number',
      (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }])),
      identity
    );
  }
}

export default NumberType;
