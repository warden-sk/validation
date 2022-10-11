/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../Type';

class BooleanType extends Type<boolean> {
  constructor() {
    super(
      'boolean',
      (input): input is boolean => typeof input === 'boolean',
      (input, context) => (this.is(input) ? r(input) : l(input, context))
    );
  }
}

export default BooleanType;
