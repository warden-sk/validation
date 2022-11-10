/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../../helpers/Type';
import identity from '../../helpers/identity';

class NullType extends Type<null> {
  constructor() {
    super(
      'null',
      (input): input is null => input === null,
      (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }])),
      identity
    );
  }
}

export default NullType;
