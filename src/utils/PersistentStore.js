// create a persistent store using local storage
// the store facorty function takes two arguments:
// 1. a key to use for the local storage
// 2. a default value to use if the local storage is empty
import { writable } from 'svelte/store'
import { browser } from '$app/environment';

export const createPersistentStore = (key, defaultValue) => {
  if (!browser) return createSsrWritable(defaultValue);
  return createBrowserWritable(key, defaultValue);
}

const createBrowserWritable = (key, defaultValue) => {
  const stored = localStorage.getItem(key)
  const { subscribe, set, update } = writable(JSON.parse(stored) || defaultValue)
  subscribe((value) => localStorage.setItem(key, JSON.stringify(value)))
  return {
    subscribe,
    update: (items) => update(() => items),
    add: (item) => update((items) => [...items, item]),
  }
}

const createSsrWritable = (defaultValue) => {
  const { subscribe, set, update } = writable(defaultValue)
  return {
    subscribe,
    set,
    update,
    add: (item) => update((items) => [...items, item]),
  }
}