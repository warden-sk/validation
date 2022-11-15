import type { Either } from '../either';
export declare function read_file(path: string): Either<string, string>;
export declare function write_file(path: string): ($: string) => Either<string, void>;
