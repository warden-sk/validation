import type { Decoder, Is, Validate, Validation } from './types';

class Type<T, I = unknown> implements Decoder<I, T> {
  constructor(readonly name: string, readonly is: Is<T>, readonly validate: Validate<I, T>) {}

  decode(i: I): Validation<T> {
    return this.validate(i, [{ input: i, key: '', type: this }]);
  }
}

export default Type;
