export const citizens = {
  //Init citizen cards
  INIT_FARMER: {
    id: 'INIT_FARMER',
    type: 'INIT',
    name: "Camponês Inicial",
    diceValues: [5],
    rewardDescription: "+1 Gold",
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-gold-points', 1)
    }
  },
  INIT_KNIGHT: {
    id: 'INIT_KNIGHT',
    type: 'INIT',
    name: "Cavaleiro Inicial",
    diceValues: [6],
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-force-points', 1)
    }
  },
  //Another citizen cards
  CLERIC: {
    id: 'CLERIC',
    type: 'HEAVENLY',
    name: "Clérigo",
    diceValues: [1],
    rewardDescription: "+3 Magic",
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-magic-points', 3)
    }
  },
  MONK: {
    id: 'MONK',
    type: 'HEAVENLY',
    name: "Monge",
    diceValues: [1],
    rewardDescription: "+1 Gold & +2 Magic",
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-gold-points', 1)
      PlayerCards.$parent.$emit('add-magic-points', 2)
    }
  },
  MERCHANT: {
    id: 'MERCHANT',
    type: 'CONSTRUCTOR',
    name: "Mercador",
    diceValues: [2],
    rewardDescription: "+2 Gold OR +2 Magic",
    reward: (PlayerCards) => {
      const user_choice = prompt('Type GOLD if you want +2 Gold. Type MAGIC if you want +2 Magic. Other values will consider you choiced the gold option.');
      switch (user_choice) {
        case 'GOLD':
          PlayerCards.$parent.$emit('add-gold-points', 2)
          break;
        case 'MAGIC':
          PlayerCards.$parent.$emit('add-magic-points', 2)
          break;
        default:
          PlayerCards.$parent.$emit('add-gold-points', 2)
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
    reward: (PlayerCards) => {
      const soldiers_count = PlayerCards.playerCardList.filter(card => card.type === 'SOLDIER').length;
      const pointsToAdd = soldiers_count * 1;
      PlayerCards.$parent.$emit('add-gold-points', pointsToAdd)
    }
  },
  MERCENARY: {
    id: 'MERCENARY',
    type: 'FIGHTER',
    name: "Mercenário",
    diceValues: [3],
    rewardDescription: "+1 Force & +1 Gold",
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-force-points', 1)
      PlayerCards.$parent.$emit('add-gold-points', 1)
    }
  },
  ALCHEMIST: {
    id: 'ALCHEMIST',
    type: 'FIGHTER',
    name: "Alquimista",
    diceValues: [3],
    rewardDescription: "Possibility to change 1 Gold by 3 Magic",
    reward: (PlayerCards) => {
      /*const player_gold = 3;
      const user_choice = prompt(`You have ${player_gold}. Want you change 1 gold by 3 magic?`);*/

      PlayerCards.$parent.$emit('add-gold-points', 1)
      PlayerCards.$parent.$emit('add-magic-points', 3)
    }
  },
  ARCHER: {
    id: 'ARCHER',
    type: 'SOLDIER',
    name: "Arqueiro",
    diceValues: [4],
    rewardDescription: "+2 Force",
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-force-points', 2)
    }
  },
  SORCERER: {
    id: 'SORCERER',
    type: 'SOLDIER',
    name: "Feiticeiro",
    diceValues: [4],
    rewardDescription: "+1 Magic & +1 Force",
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-magic-points', 1)
      PlayerCards.$parent.$emit('add-force-points', 1)
    }
  },
  FARMER: {
    id: 'FARMER',
    type: 'CONSTRUCTOR',
    name: "Camponês",
    diceValues: [5],
    rewardDescription: "+1 Gold",
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-gold-points', 1)
    }
  },
  KNIGHT: {
    id: 'KNIGHT',
    type: 'SOLDIER',
    name: "Cavaleiro",
    diceValues: [6],
    rewardDescription: "+1 Force",
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-force-points', 1)
    }
  },
  ROGUE: {
    id: 'ROGUE',
    type: 'FIGHTER',
    name: "Ladino",
    diceValues: [7],
    rewardDescription: "+2 Force & +2 Gold",
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-force-points', 2)
      PlayerCards.$parent.$emit('add-gold-points', 2)
    }
  },
  THIEF: {
    id: 'THIEF',
    type: 'FIGHTER',
    name: "ladrão",
    diceValues: [7],
    rewardDescription: "+3 Gold OR +3 Magic",
    reward: (PlayerCards) => {
      const user_choice = prompt('Type GOLD if you want +3 Gold. Type MAGIC if you want +3 Magic. Other values will consider you choiced the gold option.');
      switch (user_choice) {
        case 'GOLD':
          PlayerCards.$parent.$emit('add-gold-points', 3)
          break;
        case 'MAGIC':
          PlayerCards.$parent.$emit('add-magic-points', 3)
          break;
        default:
          PlayerCards.$parent.$emit('add-gold-points', 3)
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
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-force-points', 4)
    }
  },
  LORD_OF_WAR: {
    id: 'LORD_OF_WAR',
    type: 'SOLDIER',
    name: "Senhor da Guerra",
    diceValues: [8],
    rewardDescription: "+1 Force by each SOLDIER citizen you have",
    reward: (PlayerCards) => {
      const soldiers_count = PlayerCards.playerCardList.filter(card => card.type === 'SOLDIER').length;
      const pointsToAdd = soldiers_count * 1;
      PlayerCards.$parent.$emit('add-force-points', pointsToAdd);
    }
  },
  PALADIN: {
    id: 'PALADIN',
    type: 'HEAVENLY',
    name: "Paladino",
    diceValues: [9, 10],
    rewardDescription: "+1 Force & +2 Magic",
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-force-points', 1)
      PlayerCards.$parent.$emit('add-magic-points', 2)
    }
  },
  PRIESTESS: {
    id: 'PRIESTESS',
    type: 'HEAVENLY',
    name: "Sacerdotisa",
    diceValues: [9, 10],
    rewardDescription: "+2 Force & +1 Magic",
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-force-points', 2)
      PlayerCards.$parent.$emit('add-magic-points', 1)
    }
  },
  BUTCHER: {
    id: 'BUTCHER',
    type: 'CONSTRUCTOR',
    name: "Açougueiro",
    diceValues: [11, 12],
    rewardDescription: "+2 Gold by each CONSTRUCTOR citizen you have",
    reward: (PlayerCards) => {
      const constructors_count = PlayerCards.playerCardList.filter(card => card.type === 'CONSTRUCTOR').length;
      const pointsToAdd = constructors_count * 2;
      PlayerCards.$parent.$emit('add-gold-points', pointsToAdd)
    }
  },
  MINER: {
    id: 'MINER',
    type: 'CONSTRUCTOR',
    name: "Minerador",
    diceValues: [11, 12],
    rewardDescription: "+2 Gold",
    reward: (PlayerCards) => {
      PlayerCards.$parent.$emit('add-gold-points', 2)
    }
  }
}