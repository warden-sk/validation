/*
 * Copyright 2022 Marek Kobida
 */

import type { Either } from './Either';
import fs from 'fs';
import { tryCatch } from './Either';

export function read_file(path: string): Either<unknown, string> {
  return tryCatch(
    () => fs.readFileSync(path).toString(),
    e => e
  );
}

export function write_file(path: string): ($: string) => Either<unknown, void> {
  return $ =>
    tryCatch(
      () => fs.writeFileSync(path, $),
      e => e
    );
}
