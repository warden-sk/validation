/*
 * Copyright 2022 Marek Kobida
 */

export interface Left<E> {
  readonly $: 'Left';
  readonly left: E;
}

export interface Right<A> {
  readonly $: 'Right';
  readonly right: A;
}

//----------------------------------------------------------------------------------------------------------------------

export type Either<E, A> = Left<E> | Right<A>;

//----------------------------------------------------------------------------------------------------------------------

export const chainW =
  <E2, A, B>(f: (a: A) => Either<E2, B>) =>
  <E1>(ma: Either<E1, A>): Either<E1 | E2, B> =>
    isLeft(ma) ? ma : f(ma.right);

export const chain: <E, A, B>(f: (a: A) => Either<E, B>) => (ma: Either<E, A>) => Either<E, B> = chainW;

//----------------------------------------------------------------------------------------------------------------------

export function isLeft<E>($: Either<E, unknown>): $ is Left<E> {
  return $.$ === 'Left';
}

export function isRight<A>($: Either<unknown, A>): $ is Right<A> {
  return $.$ === 'Right';
}

export function left<E, A = never>(e: E): Either<E, A> {
  return {
    $: 'Left',
    left: e,
  };
}

export function right<A, E = never>(a: A): Either<E, A> {
  return {
    $: 'Right',
    right: a,
  };
}

export function tryCatch<E, A>(onRight: () => A, onLeft: (e: unknown) => E): Either<E, A> {
  try {
    return right(onRight());
  } catch (e) {
    return left(onLeft(e));
  }
}
