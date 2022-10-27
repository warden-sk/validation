/*
 * Copyright 2022 Marek Kobida
 */

import type { Either, Left, Right } from './Either';

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
