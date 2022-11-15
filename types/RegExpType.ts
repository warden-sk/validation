/*
 * Copyright 2022 Marek Kobida
 */

import StringType from './primitives/StringType';
import Type from '../helpers/Type';
import identity from '../helpers/identity';

class RegExpType extends Type<string> {
  constructor(readonly pattern: RegExp) {
    super(
      'string',
      (input): input is string => {
        if (new StringType().is(input)) {
          return pattern.test(input);
        }

        return false;
      },
      (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }])),
      identity
    );
  }
}

export default RegExpType;
