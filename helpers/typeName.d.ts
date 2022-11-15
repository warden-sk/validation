import type { Any } from '../types';
declare function typeName<Keys extends (Any | string)[]>(keys: Keys, on: (key: Keys[number]) => string, $: string): string;
export default typeName;
