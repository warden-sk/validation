declare function pipe<A>(a: A): A;
declare function pipe<A, B>(a: A, ab: (a: A) => B): B;
declare function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C;
declare function pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D;
declare function pipe<A, B, C, D, E>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E): E;
declare function pipe<A, B, C, D, E, F>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F): F;
export default pipe;
