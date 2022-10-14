import type { Decoder, Is, Validate, Validation, ValidationError } from './types';
import { left, right } from './functions';

class Type<T, I = unknown> implements Decoder<I, T> {
  constructor(readonly name: string, readonly is: Is<T>, readonly validate: Validate<I, T>) {}

  decode(i: I): Validation<T> {
    return this.validate(i, [{ input: i, key: '', type: this }]);
  }

  left<T>(errors: ValidationError[]): Validation<T> {
    return left(errors);
  }

  right<T>(t: T): Validation<T> {
    return right(t);
  }
}

export default Type;
