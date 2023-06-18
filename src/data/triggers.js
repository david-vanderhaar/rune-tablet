let triggerOptions = ['⚀','⚁','⚂','⚃','⚄','⚅'];

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
}
