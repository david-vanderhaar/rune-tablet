export default [
  {
    title: 'Skelerat',
    itemTags: ['Undead'],
    range: ['Same'],
    flavorText: 'A rat that has been reanimated by a necromancer, perhaps this one can cook?',
    extraText: '',
    health: '1',
    actions: [
      {
        id: 1,
        triggers: [1, 2, 3, 4],
        actionEffect: 'Move 1, Harm 1',
        extraEffects: []
      },
      {
        id: 2,
        triggers: [5],
        actionEffect: 'Move 1, Harm 2',
        extraEffects: []
      },
      {
        id: 3,
        triggers: [6],
        actionEffect: 'Move 2, Harm 2',
        extraEffects: []
      },
    ]
  },
  // a new beast
  {
    title: 'Rat King',
    health: '3',
    range: ['Same', 'Adjacent'],
    flavorText: 'Who needs friends when you have rats that can cook?',
    extraText: 'Special: Deals +1 Harm for every adjacent Skelerat.',
    actions: [
      {
        id: 1,
        triggers: [1, 2, 3, 4],
        actionEffect: 'Move 1, Harm 1',
        extraEffects: []
      },
      {
        id: 2,
        triggers: [5, 6],
        actionEffect: 'Spawn a new Skelerat on an adjacent tile',
        extraEffects: [],
      },
    ],
  },
]
