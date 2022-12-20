/*
 * Copyright 2023 Marek Kobida
 */

import type { Either } from '../either';
import errorMessages from './errorMessages';
import { tryCatch } from '../either';

type T = T[] | boolean | number | string | { [key: string]: T } | null;

export function json_decode(input: string): Either<string, T> {
  return tryCatch(
    () => JSON.parse(input),
    () => errorMessages.JSON_NOT_DECODABLE
  );
}

export function json_encode(input: T): Either<string, string> {
  return tryCatch(
    () => JSON.stringify(input),
    () => errorMessages.JSON_NOT_ENCODABLE
  );
}
