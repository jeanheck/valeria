/******************************************************************************************************************* */
/****************************************** CITIZEN CARDS ********************************************************** */
/******************************************************************************************************************* */

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
      switch (user_choose) {
        case 'GOLD':
          store.commit('addResource', {type: 'gold', value: 2})
          break;
        case 'MAGIC':
          store.commit('addResource', {type: 'magic', value: 2})
          break;
        default:
          store.commit('addResource', {type: 'gold', value: 2})
          break;
      }
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
      const soldiers_count = store.state.player.hand.filter(card => card.type === 'SOLDIER').length;
      const resourcesToAdd = soldiers_count * 1;
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
      switch (user_choose) {
        case 'GOLD':
          store.commit('addResource', {type: 'gold', value: 3})
          break;
        case 'MAGIC':
          store.commit('addResource', {type: 'magic', value: 3})
          break;
        default:
          store.commit('addResource', {type: 'gold', value: 3})
          break;
      }
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
      const soldiers_count = store.state.player.hand.filter(card => card.type === 'SOLDIER').length;
      const resourcesToAdd = soldiers_count * 1;
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
      const constructorsCount = store.state.player.hand.filter(card => card.type === 'CONSTRUCTOR').length;
      const resourcesToAdd = constructorsCount * 2;
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

/******************************************************************************************************************* */
/****************************************** MONSTER CARDS ********************************************************** */
/******************************************************************************************************************* */

export const monsters = {
  //RUINS MONSTERS
  SKELETON: {
    id: 'SKELETON',
    area: 'RUINS',
    type: 'SERVANT',
    name: 'Esqueleto',
    force: 2,
    victoryPoints: 2,
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
    reward: (store) => {
      const killedRuinsMonsters = store.state.player.killedMonsters.filter(monster => monster.area === 'RUINS').length;
      const resourcesToAdd = killedRuinsMonsters * 2;
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
    reward: (store) => {
      const user_choose = prompt('Type GOLD if you want +2 Gold. Type MAGIC if you want +2 Magic. Other values will consider you choosed the gold option.');
      switch (user_choose) {
        case 'GOLD':
          store.commit('addResource', {type: 'gold', value: 2})
          break;
        case 'MAGIC':
          store.commit('addResource', {type: 'magic', value: 2})
          break;
        default:
          store.commit('addResource', {type: 'gold', value: 2})
          break;
      }
    },
  },
  ORC_WARRIOR: {
    id: 'ORC_WARRIOR',
    area: 'MOUNTAIN',
    type: 'SERVANT',
    name: 'Guerreiro Orc',
    force: 9,
    victoryPoints: 3,
    reward: (store) => {
      const possibleCards = store.state.board.citizens.filter(pile => pile.itens[0].cost <= 3)
      const citizensCardsId = possibleCards.map(pile => {return pile.id});
      const message = `Choose one Citizen in the list below. Type the Citizen ID in the field. You need to type the name correctly to continue:\n${citizensCardsId.join('\n')}`;

      let user_choose = undefined;
      
      do {
        user_choose = prompt(message);
      } while (!citizensCardsId.find(citizenCardId => citizenCardId === user_choose));
      
      store.commit('addCitizenToHand', citizens[user_choose]);
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
    reward: (store) => {
      const killedMountainMonsters = store.state.player.killedMonsters.filter(monster => monster.area === 'MOUNTAIN').length;
      const resourcesToAdd = killedMountainMonsters * 2;
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
    reward: (store) => {
      const user_choose = prompt('Type GOLD if you want +3 Gold. Type KNIGHT if you want a Knight. Other values will consider you choosed the gold option.');
      switch (user_choose) {
        case 'GOLD':
          store.commit('addResource', {type: 'gold', value: 3})
          break;
        case 'KNIGHT':
          store.commit('addCitizenToHand', citizens.KNIGHT);
          store.commit('removeCitizenFromPile', 'KNIGHT')
          break;
        default:
          store.commit('addResource', {type: 'gold', value: 3})
          break;
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
    reward: (store) => {
      const user_choose = prompt(`Type GOLD if you want 2 Gold by each Forest monster that you killed.\n
                                  Type CITIZEN if you want a Citizen by your choise + 1 victory point.\n
                                  Other values will consider you choosed the gold option.`);

      const killedForestMonsters = store.state.player.killedMonsters.filter(monster => monster.area === 'FOREST').length;
      const resourcesToAdd = killedForestMonsters * 2;
      const citizensCardsId = store.state.board.citizens.map(pile => {return pile.id});
      const message = `Choose one Citizen in the list below. Type the Citizen ID in the field. You need to type the name correctly to continue:\n${citizensCardsId.join('\n')}`;
      let citizen_choose = undefined;

      switch (user_choose) {
        case 'GOLD':
          store.commit('addResource', {type: 'gold', value: resourcesToAdd})
          break;
        case 'CITIZEN':
          do {
            citizen_choose = prompt(message);
          } while (!citizensCardsId.find(citizenCardId => citizenCardId === citizen_choose));
          
          store.commit('addCitizenToHand', citizens[citizen_choose]);
          store.commit('removeCitizenFromPile', citizen_choose)

          store.commit('addResource', {type: 'victory', value: 1})
          break;
        default:
          store.commit('addResource', {type: 'gold', value: resourcesToAdd})
          break;
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
    reward: (store) => {
      const killedValleyMonsters = store.state.player.killedMonsters.filter(monster => monster.area === 'VALLEY').length;
      const resourcesToAdd = killedValleyMonsters * 2;
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
    reward: (store) => {
      const user_choose = prompt('Type GOLD if you want +1 Gold. Type MAGIC if you want +1 Magic. Other values will consider you choosed the gold option.');
      switch (user_choose) {
        case 'GOLD':
          store.commit('addResource', {type: 'gold', value: 1})
          break;
        case 'MAGIC':
          store.commit('addResource', {type: 'magic', value: 1})
          break;
        default:
          store.commit('addResource', {type: 'gold', value: 1})
          break;
      }
    },
  },
  GOBLIN_KING: {
    id: 'GOBLIN_KING',
    area: 'HILLS',
    type: 'BOSS',
    name: 'Rei Goblin',
    force: 6,
    victoryPoints: 4,
    reward: (store) => {
      const killedHillsMonsters = store.state.player.killedMonsters.filter(monster => monster.area === 'HILLS').length;
      const resourcesToAdd = killedHillsMonsters * 1;
      store.commit('addResource', {type: 'gold', value: resourcesToAdd})
    },
  },
}

/******************************************************************************************************************* */
/****************************************** DOMAINS CARDS ********************************************************** */
/******************************************************************************************************************* */

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
      store.commit('addResource', {type: 'force', value: store.state.player.hand.length})
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
    reward: () => {

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
    reward: () => {

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
    reward: () => {

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
    reward: () => {

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
    reward: () => {

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
    reward: () => {

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
    reward: () => {

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
    reward: () => {

    }
  },
  PLATEAU_PRATCHETT: { 
    id: 'PLATEAU_PRATCHETT',
    name: 'Platô de Pratchett',
    requirements: ['CONSTRUCTOR', 'HEAVENLY'],
    cost: 8,
    victoryPoints: 3,
    rewardDescription: 'Durante sua Fase de Ação Dominios custam a você 1 de ouro a menos',
    rewardType: 'IN_ACTION_PHASE',
    reward: () => {

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
      store.commit('addResource', {type: 'magic', value: store.state.player.hand.length})
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
    reward: () => {

    }
  },
  EMERALD_FORTRESS: { 
    id: 'EMERALD_FORTRESS',
    name: 'Fortaleza Esmeralda',
    requirements: ['CONSTRUCTOR', 'SOLDIER', 'HEAVENLY'],
    cost: 12,
    victoryPoints: 5,
    rewardDescription: 'Durante sua fase de ação, ignore o (+) ao comprar os cidadãos',
    rewardType: 'IN_ACTION_PHASE',
    reward: () => {

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
    reward: () => {

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
    reward: () => {

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
    reward: () => {

    }
  },
  VIOLET_THORN: { 
    id: 'VIOLET_THORN',
    name: 'O Espinho Violeta',
    requirements: ['SOLDIER', 'HEAVENLY'],
    cost: 7,
    victoryPoints: 3,
    rewardDescription: 'Durante sua fase de ação, quando você derrotar um monstro ganhe 1 de magia.',
    rewardType: 'IN_ACTION_PHASE',
    reward: () => {

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
    rewardType: 'IN_ACTION_PHASE',
    reward: () => {

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
    reward: () => {

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
    reward: () => {

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
    reward: () => {

    }
  },
}