/*
 * Copyright 2022 Marek Kobida
 */

import type { Decoder, Encode, Encoder, Is, Validate, Validation, ValidationError } from '../types';
import { left, right } from '../either';

class Type<T, O = T, I = unknown> implements Decoder<I, T>, Encoder<T, O> {
  constructor(
    readonly name: string,
    readonly is: Is<T>,
    readonly validate: Validate<I, T>,
    readonly encode: Encode<T, O>
  ) {}

  decode = (i: I): Validation<T> => {
    return this.validate(i, [{ input: i, key: '', type: this }]);
  };

  left<T>(errors: ValidationError[]): Validation<T> {
    return left(errors);
  }

  right<T>(t: T): Validation<T> {
    return right(t);
  }
}

export default Type;
