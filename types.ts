import type { Type } from '.';

// ✅
export interface Left<E> {
  readonly $: 'Left';
  readonly left: E;
}

// ✅
export interface Right<T> {
  readonly $: 'Right';
  readonly right: T;
}

//----------------------------------------------------------------------------------------------------------------------

// ✅
export type Either<E, T> = Left<E> | Right<T>;

// ✅
export type Is<T> = (input: unknown) => input is T;

//----------------------------------------------------------------------------------------------------------------------

// ✅
export type Validate<Input, T> = (input: Input, context: ValidationContext[]) => Validation<T>;

// ✅
export type Validation<T> = Either<ValidationError[], T>;

export interface ValidationContext {
  readonly input: unknown;
  readonly key: string;
  readonly type: Type<any, any>;
}

export interface ValidationError {
  readonly context: ValidationContext[];
  readonly value: unknown;
}
