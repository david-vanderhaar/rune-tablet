// create a persistent store using local storage
// the store facorty function takes two arguments:
// 1. a key to use for the local storage
// 2. a default value to use if the local storage is empty
import { writable } from 'svelte/store'

export const createPersistentStore = (key, defaultValue) => {
  const stored = localStorage.getItem(key)
  const { subscribe, set, update } = writable(JSON.parse(stored) || defaultValue)
  subscribe((value) => localStorage.setItem(key, JSON.stringify(value)))
  return {
    subscribe,
    add: (item) => update((items) => [...items, item]),
  }
}