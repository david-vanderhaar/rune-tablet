export default [
  {
    title: 'Long Sword',
    itemTags: ['Weapon', 'Sword'],
    range: ['Same'],
    flavorText: 'A long sword, good for keeping enemies at a distance.', 
    extraText: '',
    actions: [
      {
        triggers: [2],
        actionEffect: 'Harm 1',
        extraEffects: []
      },
      {
        triggers: [3, 4, 5],
        actionEffect: 'Move 1, Harm 2',
        extraEffects: []
      },
      {
        triggers: [6],
        actionEffect: 'Move 1, Harm 3',
        extraEffects: []
      },
    ]
  },
  {
    title: 'Boarded Shield',
    itemTags: ['Weapon', 'Shield'],
    flavorText: 'An old sheild, it\'s seen better days.',
    extraText: '',
    actions: [
      {
        triggers: [3, 4],
        actionEffect: 'Block 1',
        extraEffects: []
      },
      {
        triggers: [5, 6],
        actionEffect: 'Move 1, Block 1',
        extraEffects: []
      },
    ]
  },
]

// triggers: ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'],