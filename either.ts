/*
 * Copyright 2022 Marek Kobida
 */

interface Left<E> {
  readonly $: 'Left';
  readonly left: E;
}

interface Right<T> {
  readonly $: 'Right';
  readonly right: T;
}

//----------------------------------------------------------------------------------------------------------------------

export type Either<E, T> = Left<E> | Right<T>;

//----------------------------------------------------------------------------------------------------------------------

export const chainW =
  <E2, A, B>(_2: (a: A) => Either<E2, B>) =>
  <E1>(_1: Either<E1, A>): Either<E1 | E2, B> =>
    isLeft(_1) ? _1 : _2(_1.right);

export const chain: <E, A, B>(_2: (a: A) => Either<E, B>) => (_1: Either<E, A>) => Either<E, B> = chainW;

//----------------------------------------------------------------------------------------------------------------------

export function isLeft<E>($: Either<E, unknown>): $ is Left<E> {
  return $.$ === 'Left';
}

export function isRight<T>($: Either<unknown, T>): $ is Right<T> {
  return $.$ === 'Right';
}

export function left<E, T = never>(e: E): Either<E, T> {
  return {
    $: 'Left',
    left: e,
  };
}

export function right<T, E = never>(t: T): Either<E, T> {
  return {
    $: 'Right',
    right: t,
  };
}

export function tryCatch<E, T>(onRight: () => T, onLeft: (e: unknown) => E): Either<E, T> {
  try {
    return right(onRight());
  } catch (e) {
    return left(onLeft(e));
  }
}
