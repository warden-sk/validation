/*
 * Copyright 2023 Marek Kobida
 */

import StringType from './primitives/StringType';
import Type from '../helpers/Type';
import identity from '../helpers/identity';

class RegExpType extends Type<string> {
  constructor(readonly pattern: RegExp) {
    super(
      'string',
      (input): input is string => (new StringType().is(input) ? pattern.test(input) : false),
      (input, context) => (this.is(input) ? this.right(input) : this.left([{ context, input }])),
      identity
    );
  }
}

export default RegExpType;
