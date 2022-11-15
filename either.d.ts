interface Left<E> {
    readonly $: 'Left';
    readonly left: E;
}
interface Right<T> {
    readonly $: 'Right';
    readonly right: T;
}
export declare type Either<E, T> = Left<E> | Right<T>;
export declare const chainW: <E2, A, B>(_2: (a: A) => Either<E2, B>) => <E1>(_1: Either<E1, A>) => Either<E2 | E1, B>;
export declare const chain: <E, A, B>(_2: (a: A) => Either<E, B>) => (_1: Either<E, A>) => Either<E, B>;
export declare function isLeft<E>($: Either<E, unknown>): $ is Left<E>;
export declare function isRight<T>($: Either<unknown, T>): $ is Right<T>;
export declare function left<E, T = never>(e: E): Either<E, T>;
export declare function right<T, E = never>(t: T): Either<E, T>;
export declare function tryCatch<E, T>(onRight: () => T, onLeft: (error: unknown) => E): Either<E, T>;
export {};
