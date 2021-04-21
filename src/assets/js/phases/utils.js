export function rollDice(){
	return Math.floor(Math.random() * 6) + 1; 
}

export function getRandomDuke(dukes){
  const randomNumber = Math.floor(Math.random() * 10);
	return dukes[Object.keys(dukes)[randomNumber]]; 
}

export function createCitizenPile(citizen){
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

export function createMonsterPile(itens){
  let pile = {
    area: itens[0].area,
    itens: itens
  };
  
  return pile;
}

export function createDomainPile(itens){
  let pile = {
    itens: itens
  };
  
  return pile;
}

export function setPhase(store, phase){
	store.state.game.phase = phase;
	console.log('Current Phase > ', phase)
}

export function getReward(store, card){
  card.reward(store);
  console.log(`O efeito da carta ${card.name} foi ativado!`)
}

export function cleanDices(store){
  store.state.game.diceOne = '?';
  store.state.game.diceTwo = '?';
  store.state.game.sumDices = '?';
}

export function cleanBoard(store){
  //player
  store.state.player.resources = {
    gold: 0,
    magic: 0,
    force: 0,
    victory: 0
  }
  store.state.player.buyedCitizens = [];
  store.state.player.killedMonsters = [];
  store.state.player.buildedDomains = [];
  store.state.player.duke = [];

  //game
  store.state.game.phase = 'NOT_INITIATED';
  cleanDices(store)
  store.state.game.actionsCounter = 0;
  store.state.game.passiveEffects = {
    cancelAdditionalValueToBuy: false,
    domainsCostOneGoldLess: false,
    oneMagicWhenYouKillAMonster: false,
    oneMagicWhenYouBuyACitizen: false
  }

  //board
  store.state.board.citizens = [];
  store.state.board.monsters = [];
  store.state.board.domains = [];
}