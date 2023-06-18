const extraEffects = {
  Cleave: 'Deal 1 Harm to all adjacent enemies.',
  Unblockable: 'Ignore all enemy Block',
  Stun: 'Target loses their next turn.',
  Poison: 'Target takes 1 Harm at the start of their turn.',
};

function getExtraEffects() {
  return extraEffects;
}

function addExtraEffect(name) {
  extraEffects[name] = null;
}

function addUniqueExtraEffects(effectArray) {
  effectArray.forEach(effect => {
    if (!extraEffects[effect]) {
      addExtraEffect(effect);
    }
  });
}



// function addExtraEffectWithDescription(name, description) {
//   extraEffects[name] = description;
// }

export default {
  getExtraEffects,
  addExtraEffect,
  addUniqueExtraEffects,
}
