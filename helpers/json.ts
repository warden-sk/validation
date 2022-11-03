/*
 * Copyright 2022 Marek Kobida
 */

import type { Either } from '../Either';
import { tryCatch } from '../Either';

type T = T[] | boolean | number | string | { [key: string]: T } | null;

export function json_decode(input: string): Either<string, T> {
  return tryCatch(
    () => JSON.parse(input),
    () => 'Decoding of JSON file is not valid.'
  );
}

export function json_encode(input: T): Either<string, string> {
  return tryCatch(
    () => JSON.stringify(input),
    () => 'Encoding of JSON file is not valid.'
  );
}
