import * as cards from '../../assets/js/cards.js';

function rollDice(){
	return Math.floor(Math.random() * 6) + 1; 
}

function getRandomDuke(dukes){
  const randomNumber = Math.floor(Math.random() * 10);
	return dukes[Object.keys(dukes)[randomNumber]]; 
}

function createCitizenPile(citizen){
  let pile = {
    id: citizen.id,
    cost: citizen.cost,
    type: citizen.type,
    itens: []
  };
  while(pile.itens.length < 5){
    pile.itens.push(citizen);
  }
  return pile;
}

function createMonsterPile(itens){
  let pile = {
    area: itens[0].area,
    itens: itens
  };
  
  return pile;
}

export function startGame(store){
	console.log('phase > ', store.state.game.phase)

	store.state.game.phase = 'STARTED';
  
	console.log('phase > ', store.state.game.phase)

	//setInitialResources
	store.commit('addResource', {type: 'gold', value: 300})
  store.commit('addResource', {type: 'magic', value: 1})
	store.commit('addResource', {type: 'force', value: 300})	

	//setInitialHand
	store.commit('addCitizenToHand', cards.citizens.INIT_FARMER)
	store.commit('addCitizenToHand', cards.citizens.INIT_KNIGHT)

  //setInitialDuke
  store.commit('setDuke', getRandomDuke(cards.dukes))

  //setInitialCitizens
  const citizensOnBoard = [ 
    cards.citizens.CLERIC,
    cards.citizens.MERCHANT,
    cards.citizens.MERCENARY,
    cards.citizens.ARCHER,
    cards.citizens.FARMER,
    cards.citizens.KNIGHT,
    cards.citizens.ROGUE,
    cards.citizens.CHAMPION,
    cards.citizens.PALADIN,
    cards.citizens.BUTCHER
  ];

  citizensOnBoard.forEach((citizen) => {
    store.commit('addCitizenPileToBoard', createCitizenPile(citizen));
  })

  //setInitialMonsters
  const ruins_monsters = [
    cards.monsters.SKELETON,
    cards.monsters.SKELETON,
    cards.monsters.SKELETON,
    cards.monsters.FLAMING_SKELETON,
    cards.monsters.SKELETON_KING,
  ];
  const mountain_monsters = [ 
    cards.monsters.HORRENDOUS_BEAR,
    cards.monsters.HORRENDOUS_BEAR,
    cards.monsters.ORC_WARRIOR,
    cards.monsters.ORC_WARRIOR,
    cards.monsters.ORC_BOSS,
  ];
  const forest_monsters = [ 
    cards.monsters.TREANT,
    cards.monsters.TREANT,
    cards.monsters.CURSED_SPIDER,
    cards.monsters.CURSED_SPIDER,
    cards.monsters.SPIDER_QUEEN,
  ];
  const valley_monsters = [ 
    cards.monsters.BEAR_OWL,
    cards.monsters.BEAR_OWL,
    cards.monsters.BEAR_OWL,
    cards.monsters.GIANT,
    cards.monsters.TROLL,
  ];
  const hills_monsters = [ 
    cards.monsters.GOBLIN,
    cards.monsters.GOBLIN,
    cards.monsters.GOBLIN,
    cards.monsters.MAGE_GOBLIN,
    cards.monsters.GOBLIN_KING,
  ];

  [ruins_monsters, mountain_monsters, forest_monsters, valley_monsters, hills_monsters].forEach((itens) => {
    store.commit('addMonsterPileToBoard', createMonsterPile(itens));
  })

  //setInititalDomains
  const domainsOnBoard = [
    {itens:[
      cards.domains.ASTERATEN_EYE,
      cards.domains.AQUA_OBSERVER,
      cards.domains.BLOOD_CROW_ARMY,
      cards.domains.ST_AQUILA_CHURCH,
      cards.domains.COLISEUM,
      cards.domains.CLOUDRIDER_CAMPING,
      cards.domains.TRUCE_CUT_THROAT
    ]},
    {itens:[
      cards.domains.EMERALD_FORTRESS,
      cards.domains.DESERT_ORCHID,
      cards.domains.DAWN_PALACE,
      cards.domains.FOX_GROVE_PALACE,
      cards.domains.FORGOTTEN_SORROWS,
      cards.domains.ULLAMALIZATLI_COURT,
      cards.domains.ASTERATEN_EYE
    ]},
    {itens:[
      cards.domains.VIOLET_THORN,
      cards.domains.SHATTERED_HAND,
      cards.domains.GRIMMWATER_FORT,
      cards.domains.GARGAN_HUGHE,
      cards.domains.JUSTA_FIELD,
      cards.domains.NAE_GOLDEN_OBELISK,
      cards.domains.HALFPENNNY_HILL,
    ]},
    {itens:[
      cards.domains.PLATEAU_PRATCHETT,
      cards.domains.PURLOINER_PERCH,
      cards.domains.WEAVING_WITCHS_NEST,
      cards.domains.THE_TOWER,
      cards.domains.ROGUES_LANDING,
      cards.domains.OSTENDAR_MONOLITH,
      cards.domains.THE_URDR_ORB
    ]},
  ];

  domainsOnBoard.forEach((pile) => {
    store.commit('addDomainPileToBoard', pile);
  })

	store.state.game.phase = 'ROLLING_PHASE'

	console.log('phase > ', store.state.game.phase)
}

export function rollDices(store){
	store.state.game.phase = 'ROLLING_DICES';

	console.log('phase > ', store.state.game.phase)

	store.state.game.diceOne = rollDice();
	store.state.game.diceTwo = rollDice();
	store.state.game.sumDices = store.state.game.diceOne + store.state.game.diceTwo;

	//This timeout is just to show the dices values before the alerts show
	setTimeout(() => {
		checkDomainEffectsAfterRollDices(store)
	}, 10);
}
export function checkDomainEffectsAfterRollDices(store){
	store.state.game.phase = 'CHECKING_DOMAIN_EFFECTS_AFTER_ROLL_DICES';

	console.log('phase > ', store.state.game.phase)

	let buildedDomains = store.state.player.buildedDomains.filter(domain => domain.rewardType === 'ROLLING_DICES_PHASE');

	buildedDomains.forEach(domain => {
		domain.reward(store);
	});

	startHarvest(store);
}

export function startHarvest(store){
	store.state.game.phase = 'HARVEST_RESOURCES_BY_ROLL_DICES_VALUES';

  console.log('phase > ', store.state.game.phase)

	store.state.player.hand.forEach((card) => {
		card.diceValues.forEach((value) => {
			if(value === store.state.game.diceOne) {
				card.reward(store);
				console.log(`O efeito da carta ${card.name} foi ativado!`)
			}
			if(value === store.state.game.diceTwo) {
				card.reward(store);
				console.log(`O efeito da carta ${card.name} foi ativado!`)
			}
			if(value === store.state.game.sumDices) {
				card.reward(store);
				console.log(`O efeito da carta ${card.name} foi ativado!`)
			}
		});
	});

	checkDomainEffectsAfterHarvest(store);
}
export function checkDomainEffectsAfterHarvest(store){
	store.state.game.phase = 'CHECKING_DOMAIN_EFFECTS_AFTER_HARVEST';

	console.log('phase > ', store.state.game.phase)

	checkDomainEffectsBeforeAction(store);
}

export function checkDomainEffectsBeforeAction(store){
	store.state.game.phase = 'CHECKING_DOMAIN_EFFECTS_BEFORE_ACTION';

	console.log('phase > ', store.state.game.phase)

	let buildedDomains = store.state.player.buildedDomains.filter(domain => domain.rewardType === 'STARTING_ACTION_PHASE');

	buildedDomains.forEach(domain => {
		domain.reward(store);
	});

	startActionPhase(store);
}

export function startActionPhase(store){
	store.state.game.phase = 'ACTION_PHASE';

	console.log('phase > ', store.state.game.phase)
}

export function doingOneAction(store){
  store.state.game.actionsCounter++;

  const citizensRemain = store.state.board.citizens.filter(citizenPile => citizenPile.itens.length > 0)
  console.log('citizensRemain > ', citizensRemain);
  const monstersRemain = store.state.board.monsters.filter(monsterPile => monsterPile.itens.length > 0)
  console.log('monstersRemain > ', monstersRemain);
  const domainsRemain = store.state.board.domains.filter(domainPile => domainPile.length > 0)
  console.log('domainsRemain > ', domainsRemain);

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
	store.state.game.phase = 'CHECKING_DOMAIN_EFFECTS_AFTER_ONE_ACTION';

	console.log('phase > ', store.state.game.phase)

	store.state.game.phase = 'ACTION_PHASE';
}

export function checkDomainEffectsAfterAllActions(store){
	store.state.game.phase = 'CHECKING_DOMAIN_EFFECTS_AFTER_ALL_ACTIONS';
  store.state.game.actionsCounter = 0;

	console.log('phase > ', store.state.game.phase)

	let buildedDomains = store.state.player.buildedDomains.filter(domain => domain.rewardType === 'ENDING_ACTION_PHASE');

	buildedDomains.forEach(domain => {
		domain.reward(store);
	});

	store.state.game.phase = 'ROLLING_PHASE';
}

export function checkPointsAccordingByDuke(store){
  store.state.game.phase = 'CHECKING_POINTS_ACCORDING_BY_DUKE';

  store.state.player.duke.reward(store);

  store.state.game.phase = 'GAME_ENDED';

  console.log('phase > ', store.state.game.phase)
}