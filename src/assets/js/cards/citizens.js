import {getCitizenTypeCount} from './utils.js'

export const citizens = {
  //Init citizen cards
  INIT_FARMER: {
    id: 'INIT_FARMER',
    type: 'INIT',
    name: "Camponês Inicial",
    diceValues: [5],
    rewardDescription: "+1 Gold",
    cost: 0,
    reward: (store) => {
      store.commit('addResource', {type: 'gold', value: 1})
    }
  },
  INIT_KNIGHT: {
    id: 'INIT_KNIGHT',
    type: 'INIT',
    name: "Cavaleiro Inicial",
    diceValues: [6],
    cost: 0,
    reward: (store) => {
      store.commit('addResource', {type: 'force', value: 1})
    }
  },
  //Normal citizen cards
  CLERIC: {
    id: 'CLERIC',
    type: 'HEAVENLY',
    name: "Clérigo",
    diceValues: [1],
    rewardDescription: "+3 Magic",
    cost: 3,
    reward: (store) => {
      store.commit('addResource', {type: 'magic', value: 3})
    }
  },
  MONK: {
    id: 'MONK',
    type: 'HEAVENLY',
    name: "Monge",
    diceValues: [1],
    rewardDescription: "+1 Gold & +2 Magic",
    cost: 3,
    reward: (store) => {
      store.commit('addResource', {type: 'gold', value: 1})
      store.commit('addResource', {type: 'magic', value: 2})
    }
  },
  MERCHANT: {
    id: 'MERCHANT',
    type: 'CONSTRUCTOR',
    name: "Mercador",
    diceValues: [2],
    rewardDescription: "+2 Gold OR +2 Magic",
    cost: 2,
    reward: (store) => {
      const user_choose = prompt('Type GOLD if you want +2 Gold. Type MAGIC if you want +2 Magic. Other values will consider you choosed the gold option.');
      const type_choose = user_choose === 'MAGIC' ? 'magic' : 'gold';
      store.commit('addResource', {type: type_choose, value: 2})
    }
  },
  BLACKSMITH: {
    id: 'BLACKSMITH',
    type: 'CONSTRUCTOR',
    name: "Ferreiro",
    diceValues: [2],
    rewardDescription: "+1 Gold by each SOLDIER citizen you have",
    cost: 3,
    reward: (store) => {
      const resourcesToAdd = getCitizenTypeCount(store, 'SOLDIER') * 1;
      store.commit('addResource', {type: 'gold', value: resourcesToAdd})
    }
  },
  MERCENARY: {
    id: 'MERCENARY',
    type: 'FIGHTER',
    name: "Mercenário",
    diceValues: [3],
    rewardDescription: "+1 Force & +1 Gold",
    cost: 3,
    reward: (store) => {
      store.commit('addResource', {type: 'force', value: 1})
      store.commit('addResource', {type: 'gold', value: 1})
    }
  },
  ALCHEMIST: {
    id: 'ALCHEMIST',
    type: 'FIGHTER',
    name: "Alquimista",
    diceValues: [3],
    rewardDescription: "Possibility to change 1 Gold by 3 Magic",
    cost: 3,
    reward: (store) => {
      if(store.state.player.resources.gold > 0){
        const changeGoldByMagic = confirm(`You have ${store.state.player.resources.gold} Gold(s). Want you change 1 gold by 3 magic?`);

        if(changeGoldByMagic){
          store.commit('removeResource', {type: 'gold', value: 1})
          store.commit('addResource', {type: 'magic', value: 3})
        }
      }
    }
  },
  ARCHER: {
    id: 'ARCHER',
    type: 'SOLDIER',
    name: "Arqueiro",
    diceValues: [4],
    rewardDescription: "+2 Force",
    cost: 4,
    reward: (store) => {
      store.commit('addResource', {type: 'force', value: 2})
    }
  },
  SORCERER: {
    id: 'SORCERER',
    type: 'SOLDIER',
    name: "Feiticeiro",
    diceValues: [4],
    rewardDescription: "+1 Magic & +1 Force",
    cost: 4,
    reward: (store) => {
      store.commit('addResource', {type: 'magic', value: 1})
      store.commit('addResource', {type: 'force', value: 1})
    }
  },
  FARMER: {
    id: 'FARMER',
    type: 'CONSTRUCTOR',
    name: "Camponês",
    diceValues: [5],
    rewardDescription: "+1 Gold",
    cost: 2,
    reward: (store) => {
      store.commit('addResource', {type: 'gold', value: 1})
    }
  },
  KNIGHT: {
    id: 'KNIGHT',
    type: 'SOLDIER',
    name: "Cavaleiro",
    diceValues: [6],
    rewardDescription: "+1 Force",
    cost: 2,
    reward: (store) => {
      store.commit('addResource', {type: 'force', value: 1})
    }
  },
  ROGUE: {
    id: 'ROGUE',
    type: 'FIGHTER',
    name: "Ladino",
    diceValues: [7],
    rewardDescription: "+2 Force & +2 Gold",
    cost: 2,
    reward: (store) => {
      store.commit('addResource', {type: 'force', value: 2})
      store.commit('addResource', {type: 'gold', value: 2})
    }
  },
  THIEF: {
    id: 'THIEF',
    type: 'FIGHTER',
    name: "ladrão",
    diceValues: [7],
    rewardDescription: "+3 Gold OR +3 Magic",
    cost: 2,
    reward: (store) => {
      const user_choose = prompt('Type GOLD if you want +3 Gold. Type MAGIC if you want +3 Magic. Other values will consider you choosed the gold option.');
      const type_choose = user_choose === 'MAGIC' ? 'magic' : 'gold';
      store.commit('addResource', {type: type_choose, value: 3})
    }
  },
  CHAMPION: {
    id: 'CHAMPION',
    type: 'SOLDIER',
    name: "Campeão",
    diceValues: [8],
    rewardDescription: "+4 Force",
    cost: 2,
    reward: (store) => {
      store.commit('addResource', {type: 'force', value: 4})
    }
  },
  LORD_OF_WAR: {
    id: 'LORD_OF_WAR',
    type: 'SOLDIER',
    name: "Senhor da Guerra",
    diceValues: [8],
    rewardDescription: "+1 Force by each SOLDIER citizen you have",
    cost: 2,
    reward: (store) => {
      const resourcesToAdd = getCitizenTypeCount(store, 'SOLDIER') * 1;
      store.commit('addResource', {type: 'force', value: resourcesToAdd})
    }
  },
  PALADIN: {
    id: 'PALADIN',
    type: 'HEAVENLY',
    name: "Paladino",
    diceValues: [9, 10],
    rewardDescription: "+1 Force & +2 Magic",
    cost: 2,
    reward: (store) => {
      store.commit('addResource', {type: 'force', value: 1})
      store.commit('addResource', {type: 'magic', value: 2})
    }
  },
  PRIESTESS: {
    id: 'PRIESTESS',
    type: 'HEAVENLY',
    name: "Sacerdotisa",
    diceValues: [9, 10],
    rewardDescription: "+2 Force & +1 Magic",
    cost: 2,
    reward: (store) => {
      store.commit('addResource', {type: 'force', value: 2})
      store.commit('addResource', {type: 'magic', value: 1})
    }
  },
  BUTCHER: {
    id: 'BUTCHER',
    type: 'CONSTRUCTOR',
    name: "Açougueiro",
    diceValues: [11, 12],
    rewardDescription: "+2 Gold by each CONSTRUCTOR citizen you have",
    cost: 1,
    reward: (store) => {
      const resourcesToAdd = getCitizenTypeCount(store, 'CONSTRUCTOR') * 2;
      store.commit('addResource', {type: 'gold', value: resourcesToAdd})
    }
  },
  MINER: {
    id: 'MINER',
    type: 'CONSTRUCTOR',
    name: "Minerador",
    diceValues: [11, 12],
    rewardDescription: "+2 Gold",
    cost: 1,
    reward: (store) => {
      store.commit('addResource', {type: 'gold', value: 2})
    }
  }
}