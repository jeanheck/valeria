import {getVictoryPointsByCoins, getCitizenTypeCount, addVictoryPoints, getbuyedCitizensCount, getPointsByDomain} from './utils.js'

export const dukes = {
  WARYIN_THIEFS_LORD: { 
    id: 'WARYIN_THIEFS_LORD',
    name: 'Waryn, Lorde dos Ladinos',
    requiredCoinsToOneVictoryPoints: 3,
    rewardDescription: '1 X CONSTRUCTOR // 2 X FIGHTER // 1 by each 3 COINS',
    reward: (store) => {
      console.log('Player Duke: WARYIN_THIEFS_LORD');

      const points = [
        getCitizenTypeCount(store, 'CONSTRUCTOR'), 
        getCitizenTypeCount(store, 'FIGHTER') * 2, 
        getVictoryPointsByCoins(store, 3),
        getPointsByDomain(store, [{name: 'CONSTRUCTOR', value: 1}, {name: 'FIGHTER', value: 2}])
      ];

      addVictoryPoints(store, points);
    }
  },
  ISABELLA_THE_JUSTICE: { 
    id: 'ISABELLA_THE_JUSTICE',
    name: 'Isabella, a Justa',
    requiredCoinsToOneVictoryPoints: 3,
    rewardDescription: '1 X SOLDIER // 2 X HEAVENLY // 1 by each 3 COINS',
    reward: (store) => {
      console.log('ISABELLA_THE_JUSTICE');

      const points = [
        getCitizenTypeCount(store, 'SOLDIER'), 
        getCitizenTypeCount(store, 'HEAVENLY') * 2, 
        getVictoryPointsByCoins(store, 3)
      ];

      addVictoryPoints(store, points);
    }
  },
  REESE_THE_CRAZYMAN: { 
    id: 'REESE_THE_CRAZYMAN',
    name: 'Reese, o Agitador',
    requiredCoinsToOneVictoryPoints: 4,
    rewardDescription: '1 X MONSTER, CITIZEN, DOMAIN // 1 by each 4 COINS',
    reward: (store) => {
      console.log('REESE_THE_CRAZYMAN');
      
      const poinstByMonsters = store.state.player.killedMonsters.length;
      const poinstByCitizens = getbuyedCitizensCount();
      const poinstByDomains = store.state.player.buildedDomains.length;
      
      const points = [
        poinstByMonsters, 
        poinstByCitizens, 
        poinstByDomains,
        getVictoryPointsByCoins(store, 4)
      ];

      addVictoryPoints(store, points);
    }
  },
  NODE_MASTER_SWORDSMAN: { 
    id: 'NODE_MASTER_SWORDSMAN',
    name: 'Node, Mestre das Espadas',
    requiredCoinsToOneVictoryPoints: 3,
    rewardDescription: '1 X SOLDIER // 2 X FIGHTER // 1 by each 3 COINS',
    reward: (store) => {
      console.log('NODE_MASTER_SWORDSMAN');

      const points = [
        getCitizenTypeCount(store, 'SOLDIER'), 
        getCitizenTypeCount(store, 'FIGHTER') * 2, 
        getVictoryPointsByCoins(store, 3)
      ];

      addVictoryPoints(store, points);
    }
  },
  SIMON_THE_TRASHER: { 
    id: 'SIMON_THE_TRASHER',
    name: 'Simon, o Imundo',
    requiredCoinsToOneVictoryPoints: 2,
    rewardDescription: '1 X CONSTRUCTOR // 1 X SOLDIER // 1 by each 2 COINS',
    reward: (store) => {
      console.log('SIMON_THE_TRASHER');

      const points = [
        getCitizenTypeCount(store, 'SOLDIER'), 
        getCitizenTypeCount(store, 'CONSTRUCTOR'), 
        getVictoryPointsByCoins(store, 2)
      ];

      addVictoryPoints(store, points);
    }
  },
  ELYSIUYM_THE_BLACKSMITH: { 
    id: 'ELYSIUYM_THE_BLACKSMITH',
    name: 'Elysium, o Ferreiro',
    requiredCoinsToOneVictoryPoints: 4,
    rewardDescription: '1 X CONSTRUCTOR, SOLDIER, HEAVENLY, FIGHTER // 1 by each 4 COINS',
    reward: (store) => {
      console.log('ELYSIUYM_THE_BLACKSMITH');

      const points = [
        getCitizenTypeCount(store, 'CONSTRUCTOR'), 
        getCitizenTypeCount(store, 'SOLDIER'), 
        getCitizenTypeCount(store, 'HEAVENLY'), 
        getCitizenTypeCount(store, 'FIGHTER'), 
        getVictoryPointsByCoins(store, 4)
      ];

      addVictoryPoints(store, points);
    }
  },
  ELSYN_SHADOWS_SAINT: { 
    id: 'ELSYN_SHADOWS_SAINT',
    name: 'El\'syn, Santo das Sombras',
    requiredCoinsToOneVictoryPoints: 4,
    rewardDescription: '2 X HEAVENLY // 2 x FIGHTER // 1 by each 4 COINS',
    reward: (store) => {
      console.log('ELSYN_SHADOWS_SAINT');
      
      const points = [
        getCitizenTypeCount(store, 'HEAVENLY') * 2, 
        getCitizenTypeCount(store, 'FIGHTER') * 2, 
        getVictoryPointsByCoins(store, 4)
      ];

      addVictoryPoints(store, points);
    }
  },
  LERZANDR_THE_PROTECTOR: { 
    id: 'LERZANDR_THE_PROTECTOR',
    name: 'Lerzand\'r, o Protetor',
    requiredCoinsToOneVictoryPoints: 3,
    rewardDescription: '1 X CONSTRUCTOR // 2 x HEAVENLY // 1 by each 3 COINS',
    reward: (store) => {
      console.log('LERZANDR_THE_PROTECTOR');

      const points = [
        getCitizenTypeCount(store, 'CONSTRUCTOR'), 
        getCitizenTypeCount(store, 'HEAVENLY') * 2, 
        getVictoryPointsByCoins(store, 3)
      ];

      addVictoryPoints(store, points);
    }
  },
  HROTHGAR_THE_CONQUERER: { 
    id: 'HROTHGAR_THE_CONQUERER',
    name: 'Hrothgar, o Conquistador',
    requiredCoinsToOneVictoryPoints: 4,
    rewardDescription: '2 X MONSTER // 1 x MONSTERS TITAN TYPE // 1 by each 4 COINS',
    reward: (store) => {
      console.log('HROTHGAR_THE_CONQUERER');

      const pointsByMonsters = store.state.player.killedMonsters.length * 2;
      const pointsByMonstersTitanType = store.state.player.killedMonsters.filter(monster => monster.type === 'TITAN').length * 1;

      const points = [
        pointsByMonsters, 
        pointsByMonstersTitanType, 
        getVictoryPointsByCoins(store, 4)
      ];

      addVictoryPoints(store, points);
    }
  },
  CORNELIUS_THE_DREAMER: { 
    id: 'CORNELIUS_THE_DREAMER',
    name: 'Cornelius, o Sonhador',
    requiredCoinsToOneVictoryPoints: 3,
    rewardDescription: '3 X DOMAIN // 1 by each 3 COINS',
    reward: (store) => {
      console.log('CORNELIUS_THE_DREAMER');

      const pointsByDomains = store.state.player.buildedDomains.length * 3;

      const points = [
        pointsByDomains, 
        getVictoryPointsByCoins(store, 3)
      ];

      addVictoryPoints(store, points);
    }
  },
}