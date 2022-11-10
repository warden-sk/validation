/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../../helpers/Type';
import identity from '../../helpers/identity';

class UndefinedType extends Type<undefined> {
  constructor() {
    super(
      'undefined',
      (input): input is undefined => typeof input === 'undefined',
      (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }])),
      identity
    );
  }
}

export default UndefinedType;
