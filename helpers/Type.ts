/*
 * Copyright 2022 Marek Kobida
 */

import type { Decoder, Encode, Encoder, Is, Validate, Validation, ValidationError } from '../types';
import { left, right } from '../Either';

class Type<A, O = A, I = unknown> implements Decoder<I, A>, Encoder<A, O> {
  constructor(
    readonly name: string,
    readonly is: Is<A>,
    readonly validate: Validate<I, A>,
    readonly encode: Encode<A, O>
  ) {}

  decode = (i: I): Validation<A> => {
    return this.validate(i, [{ input: i, key: '', type: this }]);
  };

  left<A>(errors: ValidationError[]): Validation<A> {
    return left(errors);
  }

  right<A>(a: A): Validation<A> {
    return right(a);
  }
}

export default Type;
