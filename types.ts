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
