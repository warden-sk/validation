/*
 * Copyright 2023 Marek Kobida
 */

import type { Any } from '../types';

function typeName<Keys extends (Any | string)[]>(keys: Keys, on: (key: Keys[number]) => string, $: string): string {
  return keys.reduce<string>(($$, key, i) => ($$ += i === 0 ? on(key) : $ + on(key)), '');
}

export default typeName;
