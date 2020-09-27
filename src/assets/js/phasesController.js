//STARTING GAME
export function startGame(store){
	console.log('COMEÇANDO O JOGO')
	store.state.game.phase = 'STARTED';
}
//ROLLING THE DICES
export function rollDices(store){
	store.state.game.phase = 'ROLLING_DICES';
}
export function checkDomainEffectsAfterRollDices(store){
	store.state.game.phase = 'CHECKING_DOMAIN_EFFECTS_AFTER_ROLL_DICES';
}
//HARVEST THE RESOURCES
export function startHarvest(store){
	store.state.game.phase = 'HARVEST_RESOURCES_BY_ROLL_DICES_VALUES';
}
export function checkDomainEffectsAfterHarvest(store){
	store.state.game.phase = 'CHECKING_DOMAIN_EFFECTS_AFTER_HARVEST';
}
//ACTION PHASE
export function startActionPhase(store){
	store.state.game.phase = 'ACTION_PHASE';
}
export function checkDomainEffectsBeforeAction(store){
	store.state.game.phase = 'CHECKING_DOMAIN_EFFECTS_BEFORE_ACTION';
}
export function playerIsDoingTwoAction(store){
	store.state.game.phase = 'PLAYER_IS_DOING_TWO_ACTION';
}
export function checkDomainEffectsAfterAction(store){
	store.state.game.phase = 'CHECKING_DOMAIN_EFFECTS_AFTER_ACTION';
}
