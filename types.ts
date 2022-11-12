/*
 * Copyright 2022 Marek Kobida
 */

import type { Either } from './either';
import type Type from './helpers/Type';

export type Is<T> = (i: unknown) => i is T;

//----------------------------------------------------------------------------------------------------------------------

export type Validate<I, T> = (i: I, c: ValidationContext[]) => Validation<T>;

export type Validation<T> = Either<ValidationError[], T>;

export interface ValidationContext {
  readonly input: unknown /* dokončiť undefined? */;
  readonly key: string;
  readonly type: Decoder<any, any>;
}

export interface ValidationError {
  readonly context: ValidationContext[];
  readonly input: unknown;
  readonly message?: string;
}

//----------------------------------------------------------------------------------------------------------------------

export type Decode<I, T> = (i: I) => Validation<T>;

export interface Decoder<I, T> {
  readonly decode: Decode<I, T>;
  readonly name: string;
  readonly validate: Validate<I, T>;
}

//----------------------------------------------------------------------------------------------------------------------

export type Encode<T, O> = (t: T) => O;

export interface Encoder<T, O> {
  readonly encode: Encode<T, O>;
}

//----------------------------------------------------------------------------------------------------------------------

export interface Any extends Type<any, any, any> {}

export interface Mixed extends Type<any, any, unknown> {}

//----------------------------------------------------------------------------------------------------------------------

export type InputOf<Of extends Any> = Of['INPUT'];

export type OutputOf<Of extends Any> = Of['OUTPUT'];

export type TypeOf<Of extends Any> = Of['TYPE'];
