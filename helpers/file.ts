/*
 * Copyright 2022 Marek Kobida
 */

import type { Either } from '../either';
import fs from 'fs';
import { tryCatch } from '../either';

export function read_file(path: string): Either<string, string> {
  return tryCatch(
    () => fs.readFileSync(path).toString(),
    () => 'Reading from file is not valid.'
  );
}

export function write_file(path: string): ($: string) => Either<string, void> {
  return $ =>
    tryCatch(
      () => fs.writeFileSync(path, $),
      () => 'Writing to file is not valid.'
    );
}
