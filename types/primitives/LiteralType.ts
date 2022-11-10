/*
 * Copyright 2022 Marek Kobida
 */

import Type from '../../helpers/Type';
import identity from '../../helpers/identity';

class LiteralType<Of extends boolean | number | string> extends Type<Of> {
  constructor(readonly of: Of) {
    super(
      typeof of === 'string' ? `"${of}"` : of.toString(),
      (input): input is Of => input === of,
      (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }])),
      identity
    );
  }
}

export default LiteralType;
