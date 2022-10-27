/*
 * Copyright 2022 Marek Kobida
 */

import type { Either } from './Either';
import { tryCatch } from './Either';

type T = T[] | boolean | number | string | { [key: string]: T } | null;

export function json_decode(input: string): Either<unknown, T> {
  return tryCatch(
    () => JSON.parse(input),
    e => e
  );
}

export function json_encode(input: T): Either<unknown, string> {
  return tryCatch(
    () => JSON.stringify(input),
    e => e
  );
}
