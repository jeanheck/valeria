import * as cards from '../../assets/js/cards.js';

function rollDice(){
	return Math.floor(Math.random() * 6) + 1; 
}

//STARTING GAME
export function startGame(store){
	console.log('phase > ', store.state.game.phase)

	store.state.game.phase = 'STARTED';
	
	//setInitialResources
	store.commit('addResource', {type: 'gold', value: 300})
  store.commit('addResource', {type: 'magic', value: 300})
	store.commit('addResource', {type: 'force', value: 300})	

	//setInitialHand
	store.commit('addCitizenToHand', cards.citizens.INIT_FARMER)
	store.commit('addCitizenToHand', cards.citizens.INIT_KNIGHT)
	store.commit('addCitizenToHand', cards.citizens.CLERIC)
	store.commit('addCitizenToHand', cards.citizens.MONK)
	store.commit('addCitizenToHand', cards.citizens.MERCHANT)
	store.commit('addCitizenToHand', cards.citizens.BLACKSMITH)
	store.commit('addCitizenToHand', cards.citizens.MERCENARY)
	store.commit('addCitizenToHand', cards.citizens.ALCHEMIST)
	store.commit('addCitizenToHand', cards.citizens.ARCHER)
	store.commit('addCitizenToHand', cards.citizens.SORCERER)
	store.commit('addCitizenToHand', cards.citizens.FARMER)
	store.commit('addCitizenToHand', cards.citizens.KNIGHT)
	store.commit('addCitizenToHand', cards.citizens.THIEF)
	store.commit('addCitizenToHand', cards.citizens.CHAMPION)
	store.commit('addCitizenToHand', cards.citizens.LORD_OF_WAR)
	store.commit('addCitizenToHand', cards.citizens.PALADIN)
	store.commit('addCitizenToHand', cards.citizens.PRIESTESS)
	store.commit('addCitizenToHand', cards.citizens.BUTCHER)
	store.commit('addCitizenToHand', cards.citizens.MINER)

	console.log('phase > ', store.state.game.phase)

	store.state.game.phase = 'ROLLING_PHASE'

	console.log('phase > ', store.state.game.phase)
}
//ROLLING THE DICES
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
//HARVEST THE RESOURCES
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

//ACTION PHASE
export function startActionPhase(store){
	store.state.game.phase = 'ACTION_PHASE';

	console.log('phase > ', store.state.game.phase)
}

export function doingOneAction(store){
	store.state.game.actionsCounter++;

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
