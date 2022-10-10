import type { Either, Left, Right } from './types';

// ✅
export function isLeft<E>($: Either<E, unknown>): $ is Left<E> {
  return $.$ === 'Left';
}

// ✅
export function isRight<T>($: Either<unknown, T>): $ is Right<T> {
  return $.$ === 'Right';
}
