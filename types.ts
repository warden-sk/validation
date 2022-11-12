/*
 * Copyright 2022 Marek Kobida
 */

import type { Either } from './either';
import type Type from './helpers/Type';

export type Is<Type> = (input: unknown) => input is Type;

//----------------------------------------------------------------------------------------------------------------------

export type Validate<Input, Type> = (input: Input, context: ValidationContext[]) => Validation<Type>;

export type Validation<Type> = Either<ValidationError[], Type>;

export interface ValidationContext {
  readonly input: unknown;
  readonly key: string;
  readonly type: Decoder<any, any>;
}

export interface ValidationError {
  readonly context: ValidationContext[];
  readonly input: unknown;
}

//----------------------------------------------------------------------------------------------------------------------

export type Decode<Input, Type> = (input: Input) => Validation<Type>;

export interface Decoder<Input, Type> {
  readonly decode: Decode<Input, Type>;
  readonly name: string;
  readonly validate: Validate<Input, Type>;
}

//----------------------------------------------------------------------------------------------------------------------

export type Encode<Type, Output> = (type: Type) => Output;

export interface Encoder<Type, Output> {
  readonly encode: Encode<Type, Output>;
}

//----------------------------------------------------------------------------------------------------------------------

export interface Any extends Type<any, any, any> {}

export interface Mixed extends Type<any, any, unknown> {}

//----------------------------------------------------------------------------------------------------------------------

export type InputOf<Of extends Any> = Of['INPUT'];

export type OutputOf<Of extends Any> = Of['OUTPUT'];

export type TypeOf<Of extends Any> = Of['TYPE'];
