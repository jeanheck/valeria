import {monsters as MONSTERS} from './monsters.js';
import {citizens as CITIZENS} from './citizens.js';
import {getbuyedCitizensCount, getCitizensInBoardIDByType} from './utils.js'

export const domains = {
  COLISEUM: {
    id: 'COLISEUM',
    name: 'Coliseu',
    requirements: ['SOLDIER', 'SOLDIER', 'FIGHTER'],
    cost: 15,
    victoryPoints: 5,
    rewardDescription: 'Imediatamente ganhe um 1 de força para cada cidadão que possuir',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      store.commit('addResource', {type: 'force', value: getbuyedCitizensCount()})

    }
  },
  GRIMMWATER_FORT: {
    id: 'GRIMMWATER_FORT',
    name: 'Forte de Grimmwater',
    requirements: ['CONSTRUCTOR', 'CONSTRUCTOR', 'FIGHTER'],
    cost: 10,
    victoryPoints: 4,
    rewardDescription: 'Imediatamente ganhe um cidadão que custe 3 ou menos',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      const citizensCardsId = store.state.board.citizens.filter(citizen => citizen.cost <= 3).map(pile => {return pile.id});
      const message = `Choose one Citizen in the list below. Type the Citizen ID in the field. You need to type the name correctly to continue:\n${citizensCardsId.join('\n')}`;
      let citizen_choose = undefined;

      do {
        citizen_choose = prompt(message);
      } while (!citizensCardsId.find(citizenCardId => citizenCardId === citizen_choose));
      
      store.commit('addBuyedCitizen', CITIZENS[citizen_choose]);
      store.commit('removeCitizenFromPile', citizen_choose)
    }
  },
  GARGAN_HUGHE: {
    id: 'GARGAN_HUGHE',
    name: 'Abraço de Gargan',
    requirements: ['SOLDIER', 'SOLDIER'],
    cost: 7,
    victoryPoints: 2,
    rewardDescription: 'Durante qualquer fase de Rolagem ganhe 1 ponto de vitória sempre que sairem dois dados iguais',
    rewardType: 'ROLLING_DICES_PHASE',
    reward: (store) => {
      if(store.state.game.diceOne == store.state.game.diceTwo){
        store.commit('addResource', {type: 'victory', value: 1})
      }
    }
  },
  SHATTERED_HAND: {
    id: 'SHATTERED_HAND',
    name: 'Mão Despedaçada',
    requirements: ['HEAVENLY', 'CONSTRUCTOR'],
    cost: 7,
    victoryPoints: 3,
    rewardDescription: 'Imediatamente ganhe um cidadão do tipo HEAVENLY da pilha central',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      const citizensCardsId = getCitizensInBoardIDByType(store, 'HEAVENLY');
      const message = `Choose one Citizen in the list below. Type the Citizen ID in the field. You need to type the name correctly to continue:\n${citizensCardsId.join('\n')}`;
      let citizen_choose = undefined;

      do {
        citizen_choose = prompt(message);
      } while (!citizensCardsId.find(citizenCardId => citizenCardId === citizen_choose));
      
      store.commit('addBuyedCitizen', CITIZENS[citizen_choose]);
      store.commit('removeCitizenFromPile', citizen_choose)
    }
  },
  AQUA_OBSERVER: {
    id: 'AQUA_OBSERVER',
    name: 'Observador na Água',
    requirements: ['SOLDIER', 'SOLDIER'],
    cost: 6,
    victoryPoints: 3,
    rewardDescription: 'Você pode imediatamente retornar um monstro para a sua pilha para ganhar 3 pontos de vitória',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      const MonstersInHandId = store.state.player.killedMonsters.map(monster => {return monster.id});
      const message = `Choose one Monster in the list below. Type the Monster ID in the field. You need to type the name correctly to continue:\n${MonstersInHandId.join('\n')}`;
      let monster_choose = undefined;

      do {
        monster_choose = prompt(message);
      } while (!MonstersInHandId.find(monsterCardId => monsterCardId === monster_choose));
      
      store.commit('removeKilledMonster', MONSTERS[monster_choose]);
      store.commit('addMonsterToPile', MONSTERS[monster_choose])

      store.commit('addResource', {type: 'victory', value: 3})
    }
  },
  BLOOD_CROW_ARMY: {
    id: 'BLOOD_CROW_ARMY',
    name: 'Exército do Corvo Sangrento',
    requirements: ['SOLDIER', 'SOLDIER', 'SOLDIER'],
    cost: 5,
    victoryPoints: 2,
    rewardDescription: 'No início da sua fase de ação você ganha 1 ponto de força',
    rewardType: 'STARTING_ACTION_PHASE',
    reward: (store) => {
      store.commit('addResource', {type: 'force', value: 1})
    }
  },
  SHADOWTIDE_HARBOR: { 
    id: 'SHADOWTIDE_HARBOR',
    name: 'Porto da Maré Sombria',
    requirements: ['FIGHTER', 'CONSTRUCTOR', 'SOLDIER'],
    cost: 6,
    victoryPoints: 2,
    rewardDescription: 'Imediatamente ganhe um cidadão do tipo FIGHTER das pilhas centrais',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      const citizensCardsId = getCitizensInBoardIDByType(store, 'FIGHTER');
      const message = `Choose one Citizen in the list below. Type the Citizen ID in the field. You need to type the name correctly to continue:\n${citizensCardsId.join('\n')}`;
      let citizen_choose = undefined;

      do {
        citizen_choose = prompt(message);
      } while (!citizensCardsId.find(citizenCardId => citizenCardId === citizen_choose));
      
      store.commit('addBuyedCitizen', CITIZENS[citizen_choose]);
      store.commit('removeCitizenFromPile', citizen_choose)
    }
  },
  ASTERATEN_EYE: { 
    id: 'ASTERATEN_EYE',
    name: 'Olho de Asteraten',
    requirements: ['HEAVENLY', 'SOLDIER'],
    cost: 8,
    victoryPoints: 1,
    rewardDescription: 'Imediatamente ganhe 5 pontos de vitória e você pode derrotar um monstro',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      store.commit('addResource', {type: 'victory', value: 5})

      //derrotando o monstro

      const pileWithCards = store.state.board.monsters.filter(pile => pile.itens.length > 0)

      if(pileWithCards.length == 0) return;

      const monstersCardsId = pileWithCards.map(pile => {return pile.itens[0].id});
      const message = `Choose one Monster in the list below. Type the Monster ID in the field. You need to type the name correctly to continue:\n${monstersCardsId.join('\n')}`;

      let user_choose = undefined;
      let valid_chose = false;

      do {
        user_choose = prompt(message);

        if(monstersCardsId.find(monsterCardId => monsterCardId === user_choose)) {
          valid_chose = true;

          if(MONSTERS[user_choose].cost > store.state.player.resources.force){
            valid_chose = false;
            console.log('Não tem recurso pra matar o monstro')
          }
        }
      } while (!valid_chose);

      const killedMonster = MONSTERS[user_choose];

      //subtractPlayerResources(killedMonster);
      store.commit('removeResource', {type: 'force', value: killedMonster.force})
      if(killedMonster.magic) store.commit('removeResource', {type: 'magic', value: killedMonster.magic})

      store.commit('addKilledMonster', killedMonster);
      killedMonster.reward(store);
      store.commit('addResource', {type: 'victory', value: killedMonster.victoryPoints})

      if(store.state.game.passiveEffects.oneMagicWhenYouKillAMonster){
        store.commit('addResource', {type: 'magic', value: 1})
      }
      
      //removeCardAtTop();
      let pileToRemoveTheMonster = store.state.board.monsters.filter(pile => pile.area == killedMonster.area)[0]
      pileToRemoveTheMonster.itens.shift();
    }
  },
  ROGUES_LANDING: { 
    id: 'ROGUES_LANDING',
    name: 'Pouso do Ladino',
    requirements: ['CONSTRUCTOR', 'FIGHTER'],
    cost: 7,
    victoryPoints: 3,
    rewardDescription: 'Imediatamente ganhe um cidadão do tipo CONSTRUCTOR das pilhas centrais',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      const citizensCardsId = getCitizensInBoardIDByType(store, 'CONSTRUCTOR');
      const message = `Choose one Citizen in the list below. Type the Citizen ID in the field. You need to type the name correctly to continue:\n${citizensCardsId.join('\n')}`;
      let citizen_choose = undefined;

      do {
        citizen_choose = prompt(message);
      } while (!citizensCardsId.find(citizenCardId => citizenCardId === citizen_choose));
      
      store.commit('addBuyedCitizen', CITIZENS[citizen_choose]);
      store.commit('removeCitizenFromPile', citizen_choose)
    }
  },
  THE_URDR_ORB: { 
    id: 'THE_URDR_ORB',
    name: 'A Orbe de Urdr',
    requirements: ['FIGHTER', 'HEAVENLY'],
    cost: 6,
    victoryPoints: 1,
    rewardDescription: 'No final da sua fase de ação, você pode pegar um ponto de magia de um jogador',
    rewardType: 'ENDING_ACTION_PHASE',
    reward: (store) => {
      store.commit('addResource', {type: 'magic', value: 1})
    }
  },
  FOX_GROVE_PALACE: { 
    id: 'FOX_GROVE_PALACE',
    name: 'Paladiça do Arvoredo da Raposa',
    requirements: ['SOLDIER', 'FIGHTER'],
    cost: 9,
    victoryPoints: 3,
    rewardDescription: 'Durante sua fase de rolagem você pode pagar 2 de ouro para tornar um dado em 6',
    rewardType: 'ROLLING_DICES_PHASE',
    reward: (store) => {
      const message = `Do you want to pay 2 gold to change one dice value to six? Type YES if you want. Another value will be consider NO.`;
      const user_want_to_change = prompt(message);

      if(user_want_to_change === 'YES'){
        store.commit('removeResource', {type: 'gold', value: 2})

        const message = `What the dice that you want to change the value to six? Type 1 if you want to change the value of diceOne. Another value will be consider the dice 2.`;
        const user_choose_dice = prompt(message);

        if(user_choose_dice === '1'){
          store.state.game.diceOne = 6;
        }else{
          store.state.game.diceTwo = 6;
        }
      }
    }
  },
  THE_TOWER: { 
    id: 'THE_TOWER',
    name: 'A Torre',
    requirements: ['CONSTRUCTOR', 'SOLDIER', 'FIGHTER', 'HEAVENLY'],
    cost: 10,
    victoryPoints: 2,
    rewardDescription: 'No final de sua fase de Ação você pode trocar dois pontos de mágica por um de vitória',
    rewardType: 'ENDING_ACTION_PHASE',
    reward: (store) => {
      const user_choose = prompt(`Type VICTORY if you want to change 2 Magic by one victory point.`);

      if(user_choose === 'VICTORY') {
        store.commit('addResource', {type: 'victory', value: 1})
        store.commit('removeResource', {type: 'magic', value: 2})
      }
    }
  },
  PLATEAU_PRATCHETT: { 
    id: 'PLATEAU_PRATCHETT',
    name: 'Platô de Pratchett',
    requirements: ['CONSTRUCTOR', 'HEAVENLY'],
    cost: 8,
    victoryPoints: 3,
    rewardDescription: 'Durante sua Fase de Ação Dominios custam a você 1 de ouro a menos',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      store.commit('domainsCostOneGoldLess')
    }
  },
  HALFPENNNY_HILL: { 
    id: 'HALFPENNNY_HILL',
    name: 'Colina Halfpenny',
    requirements: ['CONSTRUCTOR', 'CONSTRUCTOR', 'CONSTRUCTOR'],
    cost: 6,
    victoryPoints: 2,
    rewardDescription: 'No inicio da sua Fase de Ação você ganha 1 de ouro',
    rewardType: 'STARTING_ACTION_PHASE',
    reward: (store) => {
      store.commit('addResource', {type: 'gold', value: 1})
    }
  },
  TRUCE_CUT_THROAT: { 
    id: 'TRUCE_CUT_THROAT',
    name: 'Trégua da Garganta Cortada',
    requirements: ['FIGHTER', 'HEAVENLY'],
    cost: 5,
    victoryPoints: 1,
    rewardDescription: 'Imediatamente ganhe 3 de ouro de outro jogador',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      store.commit('addResource', {type: 'gold', value: 3})
    }
  },
  ULLAMALIZATLI_COURT: { 
    id: 'ULLAMALIZATLI_COURT',
    name: 'Quadra de Ullamalizatli',
    requirements: ['CONSTRUCTOR', 'CONSTRUCTOR', 'HEAVENLY'],
    cost: 11,
    victoryPoints: 3,
    rewardDescription: 'Imediatamente ganhe 1 de magia para cada cidadão que possuir',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      store.commit('addResource', {type: 'magic', value: getbuyedCitizensCount()})
    }
  },
  ST_AQUILA_CHURCH: { 
    id: 'ST_AQUILA_CHURCH',
    name: 'Catedral de St. Aquila',
    requirements: ['HEAVENLY', 'HEAVENLY'],
    cost: 8,
    victoryPoints: 3,
    rewardDescription: 'No final de sua fase de ação ganhe 1 ouro de outro jogador',
    rewardType: 'ENDING_ACTION_PHASE',
    reward: (store) => {
      store.commit('addResource', {type: 'gold', value: 1})
    }
  },
  NAE_GOLDEN_OBELISK: { 
    id: 'NAE_GOLDEN_OBELISK',
    name: 'Obelisco Dourado de Nae',
    requirements: ['CONSTRUCTOR', 'HEAVENLY'],
    cost: 6,
    victoryPoints: 3,
    rewardDescription: 'Você pode imediatamente trocar 3 de magia por 3 pontos de vitória',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      const user_choose = prompt(`Type VICTORY if you want to change 3 Magic by 3 Victory points.`);

      if(user_choose === 'VICTORY') {
        store.commit('addResource', {type: 'victory', value: 3})
        store.commit('removeResource', {type: 'magic', value: 3})
      }
    }
  },
  EMERALD_FORTRESS: { 
    id: 'EMERALD_FORTRESS',
    name: 'Fortaleza Esmeralda',
    requirements: ['CONSTRUCTOR', 'SOLDIER', 'HEAVENLY'],
    cost: 12,
    victoryPoints: 5,
    rewardDescription: 'Durante sua fase de ação, ignore o (+) ao comprar os cidadãos',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      store.commit('cancelAdditionalValueToBuy')
    }
  },
  CLOUDRIDER_CAMPING: { 
    id: 'CLOUDRIDER_CAMPING',
    name: 'Acampamento Cloudrider',
    requirements: ['SOLDIER', 'HEAVENLY'],
    cost: 8,
    victoryPoints: 2,
    rewardDescription: 'Imediatamente ganhe 3 pontos de força e um cidadão do tipo soldado com custo menor ou igual a 2',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      store.commit('addResource', {type: 'force', value: 3})

      const citizensCardsId = getCitizensInBoardIDByType(store, 'SOLDIER');
      const message = `Choose one Citizen in the list below. Type the Citizen ID in the field. You need to type the name correctly to continue:\n${citizensCardsId.join('\n')}`;
      let citizen_choose = undefined;

      do {
        citizen_choose = prompt(message);
      } while (!citizensCardsId.find(citizenCardId => citizenCardId === citizen_choose));
      
      store.commit('addBuyedCitizen', CITIZENS[citizen_choose]);
      store.commit('removeCitizenFromPile', citizen_choose)
    }
  },
  DESERT_ORCHID: { 
    id: 'DESERT_ORCHID',
    name: 'A Orquídia do Deserto',
    requirements: ['HEAVENLY', 'FIGHTER'],
    cost: 9,
    victoryPoints: 3,
    rewardDescription: 'Durante sua fase de rolagem você pode pagar 1 de ouro pra cada cidadão do tipo heavenly que possuir, para transformar um dado em 1',
    rewardType: 'ROLLING_DICES_PHASE',
    reward: (store) => {
      const heavenlyCitizensInHand = store.state.player.buyedCitizens.filter(citizen => citizen.type === 'HEAVENLY').length;

      const message = `Do you want to pay ${heavenlyCitizensInHand} gold(s) to change one dice value to 1? Type YES if you want. Another value will be consider NO.`;
      const user_want_to_change = prompt(message);

      if(user_want_to_change === 'YES'){
        store.commit('removeResource', {type: 'gold', value: heavenlyCitizensInHand})

        const message = `What the dice that you want to change the value to 1? Type 1 if you want to change the value of diceOne. Another value will be consider the dice 2.`;
        const user_choose_dice = prompt(message);

        if(user_choose_dice === '1'){
          store.state.game.diceOne = 1;
        }else{
          store.state.game.diceTwo = 1;
        }
      }
    }
  },
  JUSTA_FIELD: { 
    id: 'JUSTA_FIELD',
    name: 'Campo de Justa',
    requirements: ['SOLDIER', 'CONSTRUCTOR', 'FIGHTER'],
    cost: 13,
    victoryPoints: 3,
    rewardDescription: 'Durante sua fase de colheita ganhe 1 ouro para cada cavaleiro que possuir',
    rewardType: 'IN_HARVEST_PHASE',
    reward: (store) => {
      const knightsAtHand = store.state.player.buyedCitizens.filter(card => card.name === 'KNIGHT').length;
      store.commit('addResource', {type: 'gold', value: knightsAtHand})
    }
  },
  VIOLET_THORN: { 
    id: 'VIOLET_THORN',
    name: 'O Espinho Violeta',
    requirements: ['SOLDIER', 'HEAVENLY'],
    cost: 7,
    victoryPoints: 3,
    rewardDescription: 'Durante sua fase de ação, quando você derrotar um monstro ganhe 1 de magia.',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      store.commit('oneMagicWhenYouKillAMonster')
    }
  },
  OSTENDAR_MONOLITH: { 
    id: 'OSTENDAR_MONOLITH',
    name: 'Monolito de Ostendaar',
    requirements: ['CONSTRUCTOR', 'SOLDIER'],
    cost: 9,
    victoryPoints: 3,
    rewardDescription: 'No início de sua fase de ação você ganha 1 ponto de magia.',
    rewardType: 'STARTING_ACTION_PHASE',
    reward: (store) => {
      store.commit('addResource', {type: 'magic', value: 1})
    }
  },
  FORGOTTEN_SORROWS: { 
    id: 'FORGOTTEN_SORROWS',
    name: 'Mágoas Esquecidas',
    requirements: ['CONSTRUCTOR', 'FIGHTER'],
    cost: 9,
    victoryPoints: 3,
    rewardDescription: 'Durante sua fase de ação ganhe 1 ponto de magia toda vez que ganhar um cidadão.',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      store.commit('oneMagicWhenYouBuyACitizen')
    }
  },
  WEAVING_WITCHS_NEST: { 
    id: 'WEAVING_WITCHS_NEST',
    name: 'Ninho da Bruxa Tecelã',
    requirements: ['CONSTRUCTOR', 'CONSTRUCTOR'],
    cost: 6,
    victoryPoints: 3,
    rewardDescription: 'Você pode imediatamente retornar um cidadão para sua pilha para ganhar 3 pontos de vitória.',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      const CitizensInHandId = store.state.player.buyedCitizens.map(citizen => {return citizen.id});
      const message = `Choose one Citizen in the list below. Type the Citizen ID in the field. You need to type the name correctly to continue:\n${CitizensInHandId.join('\n')}`;
      let citizen_choose = undefined;

      do {
        citizen_choose = prompt(message);
      } while (!CitizensInHandId.find(monsterCardId => monsterCardId === citizen_choose));
      
      store.commit('removeCitizenFromHand', CITIZENS[citizen_choose]);
      store.commit('addCitizenToPile', CITIZENS[citizen_choose])

      store.commit('addResource', {type: 'victory', value: 3})
    }
  },
  DAWN_PALACE: { 
    id: 'DAWN_PALACE',
    name: 'Palácio do Amanhecer',
    requirements: ['CONSTRUCTOR', 'SOLDIER', 'SOLDIER'],
    cost: 11,
    victoryPoints: 4,
    rewardDescription: 'Durante sua fase de rolagem você pode mudar um dado em -1.',
    rewardType: 'ROLLING_DICES_PHASE',
    reward: (store) => {
      if(store.state.game.diceOne === 1 && store.state.game.diceTwo === 1){
        return;
      }else if(store.state.game.diceOne > 1 || store.state.game.diceTwo > 1){
        const message = `Do you want to change one dice value minus 1? Type YES if you want. Another value will be consider NO.`;
        const user_want_to_change = prompt(message);

        if(user_want_to_change === 'YES'){
          const message = `What the dice that you want to change the value minus 1? Type 1 if you want to change the value of diceOne. Another value will be consider the dice 2.`;
          const user_choose_dice = prompt(message);

          if(user_choose_dice === '1'){
            if(store.state.game.diceOne === 1){
              return;
            }
            store.state.game.diceOne -= 1;
          }else{
            if(store.state.game.diceTwo === 1){
              return;
            }
            store.state.game.diceTwo -= 1;
          }
        }
      }
    }
  },
  PURLOINER_PERCH: { 
    id: 'PURLOINER_PERCH',
    name: 'Poleiro do Purloiner',
    requirements: ['FIGHTER', 'FIGHTER'],
    cost: 10,
    victoryPoints: 2,
    rewardDescription: 'Imediatamente pegue um monstro de outro jogador aleatóriamente.',
    rewardType: 'IMMEDIATELY',
    reward: (store) => {
      const pilesWithMonsters = store.state.board.monsters.filter(monsterPile => monsterPile.itens > 0);

      if(pilesWithMonsters.length == 0) return;

      const randomIndex = Math.floor(Math.random() * pilesWithMonsters.length);
      const randomMonsterPile = store.state.board.monsters[randomIndex];

      store.commit('addKilledMonster', randomMonsterPile.itens[0])
      randomMonsterPile.itens.shift();
    }
  },
}