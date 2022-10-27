/*
 * Copyright 2022 Marek Kobida
 */

import type { Either } from './Either';
import { tryCatch } from './Either';

export type JSON_TYPE = JSON_TYPE[] | boolean | number | string | { [key: string]: JSON_TYPE } | null;

export function json_decode(input: string): Either<unknown, JSON_TYPE> {
  return tryCatch(
    () => JSON.parse(input),
    e => e
  );
}

export function json_encode(input: JSON_TYPE): Either<unknown, string> {
  return tryCatch(
    () => JSON.stringify(input),
    e => e
  );
}
