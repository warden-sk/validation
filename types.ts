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
export type Is<T> = (i: unknown) => i is T;

//----------------------------------------------------------------------------------------------------------------------

// ✅
export type Validate<I, T> = (i: I, context: ValidationContext[]) => Validation<T>;

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
