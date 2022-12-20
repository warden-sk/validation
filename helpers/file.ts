/*
 * Copyright 2023 Marek Kobida
 */

import type { Either } from '../either';
import errorMessages from './errorMessages';
import fs from 'fs';
import { tryCatch } from '../either';

export function read_file(path: string): Either<string, string> {
  return tryCatch(
    () => fs.readFileSync(path).toString(),
    () => errorMessages.FILE_NOT_READABLE
  );
}

export function write_file(path: string): ($: string) => Either<string, void> {
  return $ =>
    tryCatch(
      () => fs.writeFileSync(path, $),
      () => errorMessages.FILE_NOT_WRITABLE
    );
}
