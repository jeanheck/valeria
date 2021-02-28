import {citizens as CITIZENS} from '../cards/citizens.js';
import {monsters as MONSTERS} from '../cards/monsters.js';
import {domains as DOMAINS} from '../cards/domains.js';
import {dukes as DUKES} from '../cards/dukes.js';
import {rollDice, createCitizenPile, createMonsterPile, createDomainPile, setPhase, getReward} from './utils.js';

export function startGame(store){
  setPhase(store, 'STARTED');

  //setInitialResources
	store.commit('addResource', {type: 'gold', value: 300})
  store.commit('addResource', {type: 'magic', value: 1})
	store.commit('addResource', {type: 'force', value: 300})	
	//setInitialHand
	store.commit('addBuyedCitizen', CITIZENS.INIT_FARMER)
	store.commit('addBuyedCitizen', CITIZENS.INIT_KNIGHT)
  //setInitialDuke
  store.commit('setDuke', DUKES.WARYIN_THIEFS_LORD)

  //setInitialCitizens
  const citizensOnBoard = [ 
    CITIZENS.CLERIC,
    CITIZENS.MERCHANT,
    CITIZENS.MERCENARY,
    CITIZENS.ARCHER,
    CITIZENS.FARMER,
    CITIZENS.KNIGHT,
    CITIZENS.ROGUE,
    CITIZENS.CHAMPION,
    CITIZENS.PALADIN,
    CITIZENS.BUTCHER
  ];
  citizensOnBoard.forEach((citizen) => {
    store.commit('addCitizenPileToBoard', createCitizenPile(citizen));
  })

  //setInitialMonsters
  const ruins_monsters = [
    MONSTERS.SKELETON,
    /*MONSTERS.SKELETON,
    MONSTERS.SKELETON,
    MONSTERS.FLAMING_SKELETON,
    MONSTERS.SKELETON_KING,*/
  ];
  const mountain_monsters = [ 
    MONSTERS.HORRENDOUS_BEAR,
    /*MONSTERS.HORRENDOUS_BEAR,
    MONSTERS.ORC_WARRIOR,
    MONSTERS.ORC_WARRIOR,
    MONSTERS.ORC_BOSS,*/
  ];
  const forest_monsters = [ 
    MONSTERS.TREANT,
    /*MONSTERS.TREANT,
    MONSTERS.CURSED_SPIDER,
    MONSTERS.CURSED_SPIDER,
    MONSTERS.SPIDER_QUEEN,*/
  ];
  const valley_monsters = [ 
    MONSTERS.BEAR_OWL,
    /*MONSTERS.BEAR_OWL,
    MONSTERS.BEAR_OWL,
    MONSTERS.GIANT,
    MONSTERS.TROLL,*/
  ];
  const hills_monsters = [ 
    MONSTERS.GOBLIN,
    /*MONSTERS.GOBLIN,
    MONSTERS.GOBLIN,
    MONSTERS.MAGE_GOBLIN,
    MONSTERS.GOBLIN_KING,*/
  ];

  [ruins_monsters, mountain_monsters, forest_monsters, valley_monsters, hills_monsters].forEach((itens) => {
    store.commit('addMonsterPileToBoard', createMonsterPile(itens));
  })

  //setInititalDomains
  const domainsOnBoard = [
    [
      DOMAINS.ASTERATEN_EYE,
      /*DOMAINS.AQUA_OBSERVER,
      DOMAINS.BLOOD_CROW_ARMY,
      DOMAINS.ST_AQUILA_CHURCH,
      DOMAINS.COLISEUM,
      DOMAINS.CLOUDRIDER_CAMPING,
      DOMAINS.TRUCE_CUT_THROAT*/
    ],
    [
      DOMAINS.EMERALD_FORTRESS,
      /*DOMAINS.DESERT_ORCHID,
      DOMAINS.DAWN_PALACE,
      DOMAINS.FOX_GROVE_PALACE,
      DOMAINS.FORGOTTEN_SORROWS,
      DOMAINS.ULLAMALIZATLI_COURT,
      DOMAINS.ASTERATEN_EYE*/
    ],
    [
      DOMAINS.VIOLET_THORN,
      /*DOMAINS.SHATTERED_HAND,
      DOMAINS.GRIMMWATER_FORT,
      DOMAINS.GARGAN_HUGHE,
      DOMAINS.JUSTA_FIELD,
      DOMAINS.NAE_GOLDEN_OBELISK,
      DOMAINS.HALFPENNNY_HILL,*/
    ],
    [
      DOMAINS.PLATEAU_PRATCHETT,
      /*DOMAINS.PURLOINER_PERCH,
      DOMAINS.WEAVING_WITCHS_NEST,
      DOMAINS.THE_TOWER,
      DOMAINS.ROGUES_LANDING,
      DOMAINS.OSTENDAR_MONOLITH,
      DOMAINS.THE_URDR_ORB*/
    ],
  ];

  domainsOnBoard.forEach((pile) => {
    store.commit('addDomainPileToBoard', createDomainPile(pile));
  })

  setPhase(store, 'ROLLING_PHASE');
}

export function rollDices(store){
  setPhase(store, 'ROLLING_DICES');

	store.state.game.diceOne = rollDice();
	store.state.game.diceTwo = rollDice();
	store.state.game.sumDices = store.state.game.diceOne + store.state.game.diceTwo;

	//This timeout is just to show the dices values before the alerts show
	setTimeout(() => {
		checkDomainEffectsAfterRollDices(store)
	}, 10);
}
export function checkDomainEffectsAfterRollDices(store){
  setPhase(store, 'CHECKING_DOMAIN_EFFECTS_AFTER_ROLL_DICES');

	let buildedDomains = store.state.player.buildedDomains.filter(domain => domain.rewardType === 'ROLLING_DICES_PHASE');

	buildedDomains.forEach(domain => {
		domain.reward(store);
	});

	startHarvest(store);
}

export function startHarvest(store){
  setPhase(store, 'HARVEST_RESOURCES_BY_ROLL_DICES_VALUES');

	store.state.player.buyedCitizens.forEach((card) => {
		card.diceValues.forEach((value) => {
      const matches = [value === store.state.game.diceOne, value === store.state.game.diceTwo, value === store.state.game.sumDices];

      matches.forEach(match => {
        if(match) getReward(store, card);
      })
		});
	});

	checkDomainEffectsAfterHarvest(store);
}
export function checkDomainEffectsAfterHarvest(store){
  setPhase(store, 'CHECKING_DOMAIN_EFFECTS_AFTER_HARVEST');

	checkDomainEffectsBeforeAction(store);
}

export function checkDomainEffectsBeforeAction(store){
  setPhase(store, 'CHECKING_DOMAIN_EFFECTS_BEFORE_ACTION');

	let buildedDomains = store.state.player.buildedDomains.filter(domain => domain.rewardType === 'STARTING_ACTION_PHASE');

	buildedDomains.forEach(domain => {
		domain.reward(store);
	});

	startActionPhase(store);
}

export function startActionPhase(store){
  setPhase(store, 'ACTION_PHASE');
}

export function doingOneAction(store){
  store.state.game.actionsCounter++;

  const citizensRemain = store.state.board.citizens.filter(citizenPile => citizenPile.itens.length > 0)
  const monstersRemain = store.state.board.monsters.filter(monsterPile => monsterPile.itens.length > 0)
  const domainsRemain = store.state.board.domains.filter(domainPile => domainPile.itens.length > 0)

  if(citizensRemain.length === 0 && monstersRemain.length === 0 && domainsRemain.length === 0){
    checkPointsAccordingByDuke(store);
    return;
  }

	if(store.state.game.actionsCounter === 1){
		checkDomainEffectsAfterOneAction(store)
	}else{
		checkDomainEffectsAfterAllActions(store)
	}
}

export function checkDomainEffectsAfterOneAction(store){
  setPhase(store, 'CHECKING_DOMAIN_EFFECTS_AFTER_ONE_ACTION');
  setPhase(store, 'ACTION_PHASE');
}

export function checkDomainEffectsAfterAllActions(store){
  setPhase(store, 'CHECKING_DOMAIN_EFFECTS_AFTER_ALL_ACTIONS');
  store.state.game.actionsCounter = 0;

	let buildedDomains = store.state.player.buildedDomains.filter(domain => domain.rewardType === 'ENDING_ACTION_PHASE');

	buildedDomains.forEach(domain => {
		domain.reward(store);
	});

  setPhase(store, 'ROLLING_PHASE');
}

export function checkPointsAccordingByDuke(store){
  setPhase(store, 'CHECKING_POINTS_ACCORDING_BY_DUKE');

  store.state.player.duke.reward(store);

  setPhase(store, 'GAME_ENDED');
}