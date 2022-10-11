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
export type Validate<I, T> = (i: I, c: ValidationContext[]) => Validation<T>;

// ✅
export type Validation<T> = Either<ValidationError[], T>;

// ✅
export interface ValidationContext {
  readonly input: unknown /* undefined? */;
  readonly key: string;
  readonly type: Decoder<any, any>;
}

// ✅
export interface ValidationError {
  readonly context: ValidationContext[];
  readonly message?: string;
  readonly value: unknown;
}

//----------------------------------------------------------------------------------------------------------------------

// ✅
export type Decode<I, T> = (i: I) => Validation<T>;

// ✅
export interface Decoder<I, T> {
  readonly decode: Decode<I, T>;
  readonly name: string;
  readonly validate: Validate<I, T>;
}
