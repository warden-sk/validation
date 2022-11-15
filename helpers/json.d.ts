import type { Either } from '../either';
declare type T = T[] | boolean | number | string | {
    [key: string]: T;
} | null;
export declare function json_decode(input: string): Either<string, T>;
export declare function json_encode(input: T): Either<string, string>;
export {};
