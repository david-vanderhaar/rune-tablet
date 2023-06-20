export default [
  {
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
]
