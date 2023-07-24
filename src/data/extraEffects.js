import { createPersistentStore } from '../utils/PersistentStore';

const extraEffects = [
  'Cleave',
  'Unblockable',
  'Stun',
  'Poison',
]

export const extraEffectsDescriptions = {
  Cleave: 'Deal 1 Harm to all adjacent enemies.',
  Unblockable: 'Ignore all enemy Block',
  Stun: 'Target loses their next turn.',
  Poison: 'Target takes 1 Harm at the start of their turn.',
};

const store = createPersistentStore('extraEffects', extraEffects)

export default store;
