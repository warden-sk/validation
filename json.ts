/*
 * Copyright 2022 Marek Kobida
 */

import type { Either } from './types';
import { tryCatch } from './functions';

// private
type T = T[] | boolean | number | string | { [key: string]: T } | null;

export function json_decode(input: string): Either<unknown, T> {
  return tryCatch(
    () => JSON.parse(input),
    e => e
  );
}

export function json_encode<I>(input: I): Either<unknown, string> {
  return tryCatch(
    () => JSON.stringify(input),
    e => e
  );
}
