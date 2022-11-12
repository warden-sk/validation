/*
 * Copyright 2022 Marek Kobida
 */

function typeName<Keys extends any[]>(keys: Keys, on: (key: Keys[number]) => string, $: string): string {
  return keys.reduce(($$, key, i) => ($$ += i === 0 ? on(key) : $ + on(key)), '');
}

export default typeName;
