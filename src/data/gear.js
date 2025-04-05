import { createPersistentStore } from '../utils/PersistentStore';

const defaultGear = [
  {
    uuid: '1',
    title: 'Long Sword',
    itemTags: ['Weapon', 'Sword'],
    range: ['Same'],
    flavorText: 'A balanced obsidian blade. Said to hold the power to cut Fate itself', 
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [2],
        actionEffect: 'Harm 1',
        extraEffects: []
      },
      {
        id: 2,
        triggers: [3, 4, 5],
        actionEffect: 'Move 1, Harm 2',
        extraEffects: []
      },
      {
        id: 3,
        triggers: [6],
        actionEffect: 'Move 1, Harm 3',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '2',
    title: 'Boarded Shield',
    itemTags: ['Weapon', 'Shield'],
    flavorText: 'An instrument to ward off death, even if for a moment.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [3, 4],
        actionEffect: 'Block 1',
        extraEffects: []
      },
      {
        id: 2,
        triggers: [5, 6],
        actionEffect: 'Move 1, Block 1',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '3',
    title: 'Erupting Flame',
    itemTags: ['Weapon', 'Spell'],
    flavorText: 'The fires that burned Osel Alora to the ground sit warmly in your palm.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [4],
        actionEffect: 'Deal 2 Harm to all same and adjacent.',
        extraEffects: []
      },
      {
        id: 2,
        triggers: [5],
        actionEffect: 'Deal 2 Harm to all in your row or column',
        extraEffects: []
      },
      {
        id: 3,
        triggers: [6],
        actionEffect: 'Deal 5 Harm to same or adjacent enemy. Take 2 Harm',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '4',
    title: 'Amulet of Dawn',
    itemTags: ['Gear'],
    flavorText: 'A fire that can warm even those whose fate has been taken from them.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [],
        actionEffect: 'Criteria: Pair of dice values.',
        extraEffects: []
      },
      {
        id: 2,
        triggers: [],
        actionEffect: 'Effect: Heal 2 Harm at the end of this round.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '5',
    title: 'Fate\'s Fury',
    itemTags: ['Rune'],
    flavorText: 'Their ruthlessness was passed down to you, a god\'s fury.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [],
        actionEffect: 'You may reroll any 1\'s in a fight. If you do, lose 2 Health.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '6',
    title: 'Time Warp',
    itemTags: ['Rune'],
    flavorText: 'Time is forever, death comes only once.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [],
        actionEffect: 'You may reroll any one die in a fight.',
        extraEffects: []
      },
    ]
  }
]

const starterGear = [
  {
    uuid: '101',
    title: 'Iron Dagger',
    itemTags: ['Weapon', 'Dagger'],
    flavorText: 'A simple blade, quick and reliable.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [1, 2],
        actionEffect: 'Harm 1',
        extraEffects: []
      },
      {
        id: 2,
        triggers: [3],
        actionEffect: 'Move 1, Harm 1',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '102',
    title: 'Healing Herb',
    itemTags: ['Consumable'],
    flavorText: 'A bundle of herbs that soothes wounds.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [],
        actionEffect: 'Heal 2 Harm',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '103',
    title: 'Fireball Scroll',
    itemTags: ['Spell', 'Consumable'],
    flavorText: 'A scroll that unleashes a fiery explosion.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [],
        actionEffect: 'Deal 3 Harm to all in a 2-tile radius.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '104',
    title: 'Wooden Shield',
    itemTags: ['Gear', 'Shield'],
    flavorText: 'A sturdy shield made of oak.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [2, 3],
        actionEffect: 'Block 1',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '105',
    title: 'Short Bow',
    itemTags: ['Weapon', 'Bow'],
    flavorText: 'A lightweight bow for quick shots.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [4],
        actionEffect: 'Harm 1 to a target within 3 tiles.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '106',
    title: 'Mana Potion',
    itemTags: ['Consumable'],
    flavorText: 'A potion that restores magical energy.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [],
        actionEffect: 'Restore 2 Mana.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '107',
    title: 'Thunder Rod',
    itemTags: ['Weapon', 'Spell'],
    flavorText: 'A rod that channels the power of storms.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [3, 6],
        actionEffect: 'Deal 2 Harm to a target within 2 tiles.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '108',
    title: 'Smoke Bomb',
    itemTags: ['Consumable'],
    flavorText: 'A bomb that creates a smokescreen.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [],
        actionEffect: 'All enemies within 2 tiles lose 1 turn.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '109',
    title: 'Steel Sword',
    itemTags: ['Weapon', 'Sword'],
    flavorText: 'A sharp blade forged from steel.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [2, 5],
        actionEffect: 'Harm 2',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '110',
    title: 'Ice Shard',
    itemTags: ['Spell'],
    flavorText: 'A shard of ice that freezes enemies.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [4, 6],
        actionEffect: 'Harm 1 and freeze target for 1 turn.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '111',
    title: 'Torch',
    itemTags: ['Gear'],
    flavorText: 'A simple torch to light the way.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [3],
        actionEffect: 'Illuminates a 3-tile radius.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '112',
    title: 'Poisoned Dagger',
    itemTags: ['Weapon', 'Dagger'],
    flavorText: 'A blade coated with deadly poison.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [1, 4],
        actionEffect: 'Harm 1 and apply Poison (1 Harm per turn for 2 turns).',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '113',
    title: 'Magic Mirror',
    itemTags: ['Gear'],
    flavorText: 'A mirror that reflects magical attacks.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [5],
        actionEffect: 'Reflect 1 spell back to its caster.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '114',
    title: 'War Hammer',
    itemTags: ['Weapon', 'Hammer'],
    flavorText: 'A heavy hammer that crushes armor.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [6],
        actionEffect: 'Harm 3 to a target within 1 tile.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '115',
    title: 'Elven Cloak',
    itemTags: ['Gear'],
    flavorText: 'A cloak that blends into the surroundings.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [2],
        actionEffect: 'Become invisible for 1 turn.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '116',
    title: 'Lightning Bolt',
    itemTags: ['Spell'],
    flavorText: 'A bolt of lightning strikes your foes.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [3, 5],
        actionEffect: 'Deal 3 Harm to a target within 4 tiles.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '117',
    title: 'Health Potion',
    itemTags: ['Consumable'],
    flavorText: 'A potion that restores vitality.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [],
        actionEffect: 'Heal 3 Harm.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '118',
    title: 'Throwing Axe',
    itemTags: ['Weapon', 'Axe'],
    flavorText: 'A small axe designed for throwing.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [2, 4],
        actionEffect: 'Harm 2 to a target within 2 tiles.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '119',
    title: 'Phoenix Feather',
    itemTags: ['Consumable'],
    flavorText: 'A feather that revives the fallen.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [],
        actionEffect: 'Revive a fallen ally with 2 Health.',
        extraEffects: []
      },
    ]
  },
  {
    uuid: '120',
    title: 'Chainmail Armor',
    itemTags: ['Gear', 'Armor'],
    flavorText: 'Armor that provides excellent protection.',
    extraText: '',
    actions: [
      {
        id: 1,
        triggers: [3, 5],
        actionEffect: 'Reduce all incoming Harm by 1 for 3 turns.',
        extraEffects: []
      },
    ]
  },
];

export default createPersistentStore('gear', defaultGear)
