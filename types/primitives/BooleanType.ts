/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../../helpers/Type';
import identity from '../../helpers/identity';

class BooleanType extends Type<boolean> {
  constructor() {
    super(
      'boolean',
      (input): input is boolean => typeof input === 'boolean',
      (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }])),
      identity
    );
  }
}

export default BooleanType;
