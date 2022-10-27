/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../../Type';

class UndefinedType extends Type<undefined> {
  constructor() {
    super(
      'UndefinedType',
      'undefined',
      (input): input is undefined => typeof input === 'undefined',
      (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }]))
    );
  }
}

export default UndefinedType;
