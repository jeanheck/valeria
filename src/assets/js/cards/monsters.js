import {citizens as CITIZENS} from './citizens.js';
import {getMonsterAreaCount} from './utils.js'
import {messages as MESSAGES} from './messages.js';

export const monsters = {
  //RUINS MONSTERS
  SKELETON: {
    id: 'SKELETON',
    area: 'RUINS',
    type: 'SERVANT',
    name: 'Esqueleto',
    force: 2,
    victoryPoints: 2,
    rewardDescription: '+ 1 ouro',
    reward: (store) => {
      store.commit('addResource', {type: 'gold', value: 1})
    }
  },
  FLAMING_SKELETON: {
    id: 'FLAMING_SKELETON',
    area: 'RUINS',
    type: 'TITAN',
    name: 'Esqueleto Flamejante',
    force: 5,
    victoryPoints: 3,
    rewardDescription: '+ 1 ouro & + 1 mágica',
    reward: (store) => {
      store.commit('addResource', {type: 'gold', value: 1})
      store.commit('addResource', {type: 'magic', value: 1})
    },
  },
  SKELETON_KING: {
    id: 'SKELETON_KING',
    area: 'RUINS',
    type: 'BOSS',
    name: 'Rei Esqueleto',
    force: 8,
    victoryPoints: 4,
    rewardDescription: '+ 2 ouro para cada monstro do tipo Ruína morto.',
    reward: (store) => {
      const resourcesToAdd = getMonsterAreaCount(store, 'RUINS') * 2;
      store.commit('addResource', {type: 'gold', value: resourcesToAdd})
    },
  },
  //MOUNTAIN MONSTERS
  HORRENDOUS_BEAR: {
    id: 'HORRENDOUS_BEAR',
    area: 'MOUNTAIN',
    type: 'BEAST',
    name: 'Urso Horrendo',
    force: 5,
    victoryPoints: 3,
    rewardDescription: '+ 2 ouro OU + 2 mágica',
    reward: (store) => {
      const user_choose = prompt(MESSAGES.CHOOSE_GOLD_OR_MAGIC(2));
      const type_choose = user_choose === 'MAGIC' ? 'magic' : 'gold';
      store.commit('addResource', {type: type_choose, value: 2})
    },
  },
  ORC_WARRIOR: {
    id: 'ORC_WARRIOR',
    area: 'MOUNTAIN',
    type: 'SERVANT',
    name: 'Guerreiro Orc',
    force: 9,
    victoryPoints: 3,
    rewardDescription: '+ 1 cidadão que custe 3 ou menos',
    reward: (store) => {
      const pileWithCards = store.state.board.citizens.filter(pile => pile.itens.length > 0)
      const possibleCards = pileWithCards.filter(pile => pile.itens[0].cost <= 3)

      if(possibleCards.length == 0) return;

      const citizensCardsId = possibleCards.map(pile => {return pile.id});
      const message = `Choose one Citizen in the list below. Type the Citizen ID in the field. You need to type the name correctly to continue:\n${citizensCardsId.join('\n')}`;

      let user_choose = undefined;
      
      do {
        user_choose = prompt(message);
      } while (!citizensCardsId.find(citizenCardId => citizenCardId === user_choose));
      
      store.commit('addBuyedCitizen', CITIZENS[user_choose]);
      store.commit('removeCitizenFromPile', user_choose)
    },
  },
  ORC_BOSS: {
    id: 'ORC_BOSS',
    area: 'MOUNTAIN',
    type: 'BOSS',
    name: 'Orc Chefe',
    force: 14,
    victoryPoints: 6,
    rewardDescription: '+ 2 de ouro para cada monstro tipo Montanha morto',
    reward: (store) => {
      const resourcesToAdd = getMonsterAreaCount(store, 'MOUNTAIN') * 2;
      store.commit('addResource', {type: 'gold', value: resourcesToAdd})
    },
  },
  //FOREST MONSTERS
  TREANT: {
    id: 'TREANT',
    area: 'FOREST',
    type: 'SERVANT',
    name: 'Treant',
    force: 3,
    victoryPoints: 1,
    rewardDescription: '+ 1 ouro & + 1 mágica',
    reward: (store) => {
      store.commit('addResource', {type: 'gold', value: 1})
      store.commit('addResource', {type: 'magic', value: 1})
    },
  },
  CURSED_SPIDER: {
    id: 'CURSED_SPIDER',
    area: 'FOREST',
    type: 'BEAST',
    name: 'Aranha Amaldiçoada',
    force: 6,
    victoryPoints: 2,
    rewardDescription: '+ 3 ouro OU 1 Cavaleiro',
    reward: (store) => {
      const user_choose = prompt('Type GOLD if you want +3 Gold. Type KNIGHT if you want a Knight. Other values will consider you choosed the gold option.');

      if(user_choose === 'KNIGHT'){
        store.commit('addBuyedCitizen', CITIZENS.KNIGHT);
        store.commit('removeCitizenFromPile', 'KNIGHT');
      }else{
        store.commit('addResource', {type: 'gold', value: 3});
      }
    },
  },
  SPIDER_QUEEN: {
    id: 'SPIDER_QUEEN',
    area: 'FOREST',
    type: 'BOSS',
    name: 'Rainha Aranha',
    force: 10,
    magic: 3,
    victoryPoints: 5,
    rewardDescription: '+ 2 ouro para cada monstro tipo Floresta morto OU um cidadão + 1 ponto de vitória',
    reward: (store) => {
      const user_choose = prompt(`Type GOLD if you want 2 Gold by each Forest monster that you killed.\n
                                  Type CITIZEN if you want a Citizen by your choise + 1 victory point.\n
                                  Other values will consider you choosed the gold option.`);

      const resourcesToAdd = getMonsterAreaCount(store, 'FOREST') * 2;
      const citizensCardsId = store.state.board.citizens.map(pile => {return pile.id});
      const message = `Choose one Citizen in the list below. Type the Citizen ID in the field. You need to type the name correctly to continue:\n${citizensCardsId.join('\n')}`;
      let citizen_choose = undefined;

      if(user_choose === 'CITIZEN'){
        do {
          citizen_choose = prompt(message);
        } while (!citizensCardsId.find(citizenCardId => citizenCardId === citizen_choose));
        
        store.commit('addBuyedCitizen', CITIZENS[citizen_choose]);
        store.commit('removeCitizenFromPile', citizen_choose)
        store.commit('addResource', {type: 'victory', value: 1})
      }else{
        store.commit('addResource', {type: 'gold', value: resourcesToAdd})
      }
    },
  },
  //VALLEY
  BEAR_OWL: {
    id: 'BEAR_OWL',
    area: 'VALLEY',
    type: 'BEAST',
    name: 'Urso-Coruja',
    force: 4,
    victoryPoints: 2,
    rewardDescription: '+ 2 mágica',
    reward: (store) => {
      store.commit('addResource', {type: 'magic', value: 2})
    },
  },
  GIANT: {
    id: 'GIANT',
    area: 'VALLEY',
    type: 'TITAN',
    name: 'Gigante',
    force: 8,
    victoryPoints: 3,
    rewardDescription: '+ 1 ouro & + 2 mágica',
    reward: (store) => {
      store.commit('addResource', {type: 'gold', value: 1})
      store.commit('addResource', {type: 'magic', value: 2})
    },
  },
  TROLL: {
    id: 'TROLL',
    area: 'VALLEY',
    type: 'BOSS',
    name: 'Troll',
    force: 12,
    victoryPoints: 6,
    rewardDescription: '+ 2 mágica para cada monstro tipo Vale morto',
    reward: (store) => {
      const resourcesToAdd = getMonsterAreaCount(store, 'VALLEY') * 2;
      store.commit('addResource', {type: 'magic', value: resourcesToAdd})
    },
  },
  //HILLS
  GOBLIN: {
    id: 'GOBLIN',
    area: 'HILLS',
    type: 'SERVANT',
    name: 'Goblin',
    force: 1,
    victoryPoints: 1,
    rewardDescription: '+ 1 ouro',
    reward: (store) => {
      store.commit('addResource', {type: 'gold', value: 1})
    },
  },
  MAGE_GOBLIN: {
    id: 'MAGE_GOBLIN',
    area: 'HILLS',
    type: 'TITAN',
    name: 'Goblin Mago',
    force: 3,
    victoryPoints: 2,
    rewardDescription: '+ 1 ouro OU + 1 mágica',
    reward: (store) => {
      const user_choose = prompt(MESSAGES.CHOOSE_GOLD_OR_MAGIC(1));
      const type_choose = user_choose === 'MAGIC' ? 'magic' : 'gold';
      store.commit('addResource', {type: type_choose, value: 1})
    },
  },
  GOBLIN_KING: {
    id: 'GOBLIN_KING',
    area: 'HILLS',
    type: 'BOSS',
    name: 'Rei Goblin',
    force: 6,
    victoryPoints: 4,
    rewardDescription: '+ 1 ouro para cada monstro tipo Hills morto',
    reward: (store) => {
      const resourcesToAdd = getMonsterAreaCount(store, 'HILLS') * 1;
      store.commit('addResource', {type: 'gold', value: resourcesToAdd})
    },
  },
}