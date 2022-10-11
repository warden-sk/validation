/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../Type';

class UndefinedType extends Type<undefined> {
  constructor() {
    super(
      'undefined',
      (input): input is undefined => typeof input === 'undefined',
      (input, context) => (this.is(input) ? r(input) : l(input, context))
    );
  }
}

export default UndefinedType;
