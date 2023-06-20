// let triggerOptions = ['⚀','⚁','⚂','⚃','⚄','⚅'];
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

function get() {
  return triggerOptions;
}

function add(name) {
  triggerOptions.push(name);
}

function set(newTriggerOptions) {
  triggerOptions = newTriggerOptions;
}

function addUnique(triggerArray) {
  triggerOptions = [...new Set([...triggerOptions, ...triggerArray])]
}

export default {
  get,
  add,
  set,
  addUnique,
  getNumberAsDie,
}
