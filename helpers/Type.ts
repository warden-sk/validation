/*
 * Copyright 2023 Marek Kobida
 */

import type { Decoder, Encode, Encoder, Is, Validate, Validation, ValidationError } from '../types';
import { left, right } from '../either';

class Type<Type, Output = Type, Input = unknown> implements Decoder<Input, Type>, Encoder<Type, Output> {
  readonly INPUT!: Input; // typescript

  readonly OUTPUT!: Output; // typescript

  readonly TYPE!: Type; // typescript

  constructor(
    readonly name: string,
    readonly is: Is<Type>,
    readonly validate: Validate<Input, Type>,
    readonly encode: Encode<Type, Output>
  ) {}

  decode = (input: Input): Validation<Type> => {
    return this.validate(input, [{ input, key: '', type: this }]);
  };

  left<Type>(errors: ValidationError[]): Validation<Type> {
    return left(errors);
  }

  right<Type>(type: Type): Validation<Type> {
    return right(type);
  }
}

export default Type;
