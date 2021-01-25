export const initialData = {
  characters: {
    'character-1': { id: 'character-1', name: 'Steven Universe', picture: 'images/steven_universe.png', showTag: 'SU' },
    'character-2': { id: 'character-2', name: 'Rose Quartz', picture: "crossover-episode/images/rose_quartz.png", showTag: 'SU' },
    'character-3': { id: 'character-3', name: 'Pearl', picture: "crossover-episode/images/pearl.png", showTag: 'SU' },
    'character-4': { id: 'character-4', name: 'Garnet', picture: "crossover-episode/images/garnet.png", showTag: 'SU' },
    'character-5': { id: 'character-5', name: 'Amethyst', picture: "crossover-episode/images/amethyst.png", showTag: 'SU' },
    'character-6': { id: 'character-6', name: 'Mordecai', picture: "crossover-episode/images/mordecai.png", showTag: 'RS' },
    'character-7': { id: 'character-7', name: 'Rigby', picture: "crossover-episode/images/rigby.png", showTag: 'RS' },
    'character-8': { id: 'character-8', name: 'Margaret Smith', picture: "crossover-episode/images/margaret.png", showTag: 'RS' },
    'character-9': { id: 'character-9', name: 'Benson', picture: "crossover-episode/images/benson.png", showTag: 'RS' },
    'character-10': { id: 'character-10', name: 'Skips', picture: "crossover-episode/images/skips.png", showTag: 'RS' }
  },
  shows: {
    'show-1': {
      id: 'show-1',
      title: 'Steven Universe',
      showTag: 'SU',
      characterIds: [ 'character-1', 'character-2', 'character-3', 'character-4', 'character-5']
    },
    'show-2': {
      id: 'show-2',
      title: 'My Episode\'s',
      showTag: null,
      characterIds: []
    },
    'show-3': {
      id: 'show-3',
      title: 'Regular Show',
      showTag: 'RS',
      characterIds: ['character-6', 'character-7', 'character-8', 'character-9', 'character-10']
    }
  },
  showsOrder: [ 'show-1', 'show-2', 'show-3' ]
}
