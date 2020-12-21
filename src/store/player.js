export const player = {
  state: () => ({
    resources: {
      gold: 0,
      magic: 0,
      force: 0,
      victory: 0
    },
    buyedCitizens: [],
    killedMonsters: [],
    buildedDomains: [],
    duke: {}
  }),
  mutations: {
    addResource(state, payload) {
      state.resources[payload.type] += payload.value;
      console.log(`O player ganhou ${payload.value} ${payload.type}(s)!`);
    },
    removeResource(state, payload) {
      state.resources[payload.type] -= payload.value;
      console.log(`O player perdeu ${payload.value} ${payload.type}(s)!`);
    },
    addBuyedCitizen(state, card) {
      state.buyedCitizens.push(card);
      console.log(`A carta ${card.name} foi adicionada a mão do jogador!`);
    },
    removeCitizenFromHand(state, citizenToRemove) {
      const indexToRemove = state.buyedCitizens.findIndex(citizen => citizen === citizenToRemove);
      state.buyedCitizens.splice(indexToRemove, 1);
      console.log(`A carta ${citizenToRemove.name} foi removida da mão do jogador!`);
    },
    addKilledMonster(state, card) {
      state.killedMonsters.push(card);
      console.log(`A carta ${card.name} foi adicionada a pilha de monstros mortos!`);
    },
    removeKilledMonster(state, monsterToRemove) {
      const indexToRemove = state.killedMonsters.findIndex(monster => monster === monsterToRemove);
      state.killedMonsters.splice(indexToRemove, 1);
      console.log(`A carta ${monsterToRemove.name} foi removida da pilha de monstros mortos!`);
    },
    addBuildedDomain(state, card){
      state.buildedDomains.push(card);
      console.log(`A carta ${card.name} foi adicionada a pilha de domínios construidos!`);
    },
    setDuke(state, duke){
      state.duke = duke;
      console.log(`O duque ${duke.name} será o duque do jogador nesta partida!`);
    },
    giveCardToPlayer(state, {type, card}){
      let listType;

      switch (type) {
        case 'Citizen':
          listType = 'buyedCitizens';
          break;
        case 'Monster':
          listType = 'killedMonsters';
          break;
        case 'Domain':
          listType = 'buildedDomains';
          break;
        default:
          break;
      }

      state[listType].push(card);
      console.log(`A carta ${card.name} foi adicionada para o player!`);
    },
  }
}