/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../../helpers/Type';

class BooleanType extends Type<boolean> {
  constructor() {
    super(
      'boolean',
      (input): input is boolean => typeof input === 'boolean',
      (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }]))
    );
  }
}

export default BooleanType;
