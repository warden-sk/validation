/*
 * Copyright 2022 Marek Kobida
 */

import type { Either } from './either';
import type Type from './helpers/Type';

export type Is<A> = (i: unknown) => i is A;

//----------------------------------------------------------------------------------------------------------------------

export type Validate<I, A> = (i: I, c: ValidationContext[]) => Validation<A>;

export type Validation<A> = Either<ValidationError[], A>;

export interface ValidationContext {
  readonly input: unknown /* undefined? */;
  readonly key: string;
  readonly type: Decoder<any, any>;
}

export interface ValidationError {
  readonly context: ValidationContext[];
  readonly input: unknown;
  readonly message?: string;
}

//----------------------------------------------------------------------------------------------------------------------

export type Decode<I, A> = (i: I) => Validation<A>;

export interface Decoder<I, A> {
  readonly decode: Decode<I, A>;
  readonly name: string;
  readonly validate: Validate<I, A>;
}

//----------------------------------------------------------------------------------------------------------------------

export type Encode<A, O> = (a: A) => O;

export interface Encoder<A, O> {
  readonly encode: Encode<A, O>;
}

//----------------------------------------------------------------------------------------------------------------------

export type TypeOf<Of> = Of extends Type<infer A>[] ? A[] : Of extends Type<infer A> ? A : never;
