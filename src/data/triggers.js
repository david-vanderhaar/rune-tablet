import { createPersistentStore } from '../utils/PersistentStore';

let triggerOptions = Array.from(Array(6), (x, i) => i + 1);

const numberAsDie = {
  1: '⚀',
  2: '⚁',
  3: '⚂',
  4: '⚃',
  5: '⚄',
  6: '⚅',
}

export function getNumberAsDie(value) {
  return numberAsDie[value] || value;
}

export default createPersistentStore('triggerOptions', triggerOptions);
