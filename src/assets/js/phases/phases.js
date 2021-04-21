import {citizens as CITIZENS} from '../cards/citizens.js';
import {monsters as MONSTERS} from '../cards/monsters.js';
import {domains as DOMAINS} from '../cards/domains.js';
import {dukes as DUKES} from '../cards/dukes.js';
import {rollDice, createCitizenPile, createMonsterPile, createDomainPile, setPhase, getReward, getRandomDuke, cleanBoard, cleanDices} from './utils.js';

export function restartGame(store){
  cleanBoard(store);
  startGame(store)
}

export function startGame(store){
  setPhase(store, 'STARTED');

  //Dices
  store.state.game.diceOne = '?',
  store.state.game.diceTwo = '?',
  store.state.game.sumDices = '?',

  //setInitialResources
	store.commit('addResource', {type: 'gold', value: 2})
  store.commit('addResource', {type: 'magic', value: 1})
	store.commit('addResource', {type: 'force', value: 0})	
	//setInitialHand
	store.commit('addBuyedCitizen', CITIZENS.INIT_FARMER)
	store.commit('addBuyedCitizen', CITIZENS.INIT_KNIGHT)
  //setInitialDuke
  store.commit('setDuke', getRandomDuke(DUKES))

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
    MONSTERS.SKELETON,
    MONSTERS.SKELETON,
    MONSTERS.FLAMING_SKELETON,
    MONSTERS.SKELETON_KING,
  ];
  const mountain_monsters = [ 
    MONSTERS.HORRENDOUS_BEAR,
    MONSTERS.HORRENDOUS_BEAR,
    MONSTERS.ORC_WARRIOR,
    MONSTERS.ORC_WARRIOR,
    MONSTERS.ORC_BOSS,
  ];
  const forest_monsters = [ 
    MONSTERS.TREANT,
    MONSTERS.TREANT,
    MONSTERS.CURSED_SPIDER,
    MONSTERS.CURSED_SPIDER,
    MONSTERS.SPIDER_QUEEN,
  ];
  const valley_monsters = [ 
    MONSTERS.BEAR_OWL,
    MONSTERS.BEAR_OWL,
    MONSTERS.BEAR_OWL,
    MONSTERS.GIANT,
    MONSTERS.TROLL,
  ];
  const hills_monsters = [ 
    MONSTERS.GOBLIN,
    MONSTERS.GOBLIN,
    MONSTERS.GOBLIN,
    MONSTERS.MAGE_GOBLIN,
    MONSTERS.GOBLIN_KING,
  ];

  [ruins_monsters, mountain_monsters, forest_monsters, valley_monsters, hills_monsters].forEach((itens) => {
    store.commit('addMonsterPileToBoard', createMonsterPile(itens));
  })

  //setInititalDomains
  const domainsOnBoard = [
    [
      DOMAINS.AQUA_OBSERVER,
      DOMAINS.BLOOD_CROW_ARMY,
      DOMAINS.CLOUDRIDER_CAMPING
    ],
    [
      DOMAINS.EMERALD_FORTRESS,
      DOMAINS.DESERT_ORCHID,
      DOMAINS.FORGOTTEN_SORROWS
    ],
    [
      DOMAINS.GRIMMWATER_FORT,
      DOMAINS.JUSTA_FIELD,
      DOMAINS.NAE_GOLDEN_OBELISK
    ],
    [
      DOMAINS.PURLOINER_PERCH,
      DOMAINS.ROGUES_LANDING,
      DOMAINS.SHATTERED_HAND
    ],
    [
      DOMAINS.ST_AQUILA_CHURCH,
      DOMAINS.TRUCE_CUT_THROAT,
      DOMAINS.WEAVING_WITCHS_NEST
    ],
  ];

  domainsOnBoard.forEach((pile) => {
    store.commit('addDomainPileToBoard', createDomainPile(pile));
  })

  setPhase(store, 'ROLLING_PHASE');

  cleanDices(store)
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

  cleanDices(store)
}

export function checkPointsAccordingByDuke(store){
  setPhase(store, 'CHECKING_POINTS_ACCORDING_BY_DUKE');

  store.state.player.duke.reward(store);

  setPhase(store, 'GAME_ENDED');
}