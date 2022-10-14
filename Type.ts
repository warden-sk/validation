import type { Decoder, Is, Validate, Validation, ValidationContext } from './types';
import { left, right } from './functions';

class Type<T, I = unknown> implements Decoder<I, T> {
  constructor(readonly name: string, readonly is: Is<T>, readonly validate: Validate<I, T>) {}

  decode(i: I): Validation<T> {
    return this.validate(i, [{ input: i, key: '', type: this }]);
  }

  left<T>(value: unknown, context: ValidationContext[]): Validation<T> {
    return left([{ context, value }]);
  }

  right<T>(value: T): Validation<T> {
    return right(value);
  }
}

export default Type;
