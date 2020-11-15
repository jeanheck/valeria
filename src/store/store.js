import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    player: {
      resources: {
        gold: 0,
        magic: 0,
        force: 0,
        victory: 0
      },
      hand: [],
      killedMonsters: [],
      buildedDomains: [],
      duke: {}
    },
    board: {
      citizens: [],
      monsters: [],
      domains: []
    },
    game: {
      phase: 'NOT_INITIATED',
      diceOne: '',
      diceTwo: '',
      sumDices: '',
      actionsCounter: 0
    }
  },
  mutations: {
    //Resources mutations
    addResource(state, payload) {
      state.player.resources[payload.type] += payload.value;
      console.log(`O player ganhou ${payload.value} ${payload.type}(s)!`);
    },
    removeResource(state, payload) {
      state.player.resources[payload.type] -= payload.value;
      console.log(`O player perdeu ${payload.value} ${payload.type}(s)!`);
    },
    addCitizenToHand(state, card) {
      state.player.hand.push(card);
      console.log(`A carta ${card.name} foi adicionada a mão do jogador!`);
    },
    //Citizen Mutations
    addCitizenPileToBoard(state, pile) {
      state.board.citizens.push(pile);
      console.log(`Uma pilha de cidadãos foi adicionada ao board!`);
    },
    removeCitizenFromPile(state, pileId) {
      state.board.citizens.find(pile => pile.id === pileId).itens.shift();
      console.log(`Um cidadão foi retirado da pilha!`);
    },
    //Monster Mutations
    addKilledMonster(state, card) {
      state.player.killedMonsters.push(card);
      console.log(`A carta ${card.name} foi adicionada a pilha de monstros mortos!`);
    },
    removeKilledMonster(state, monsterToRemove) {
      const indexToRemove = state.player.killedMonsters.findIndex(monster => monster === monsterToRemove);
      state.player.killedMonsters.splice(indexToRemove, 1);
      console.log(`A carta ${monsterToRemove.name} foi removida da pilha de monstros mortos!`);
    },
    addMonsterToPile(state, monster) {
      state.board.monsters.forEach(pile => {
        if(pile[0].area === monster.area){
          pile.unshift(monster);
        }
      })

      console.log(`A carta ${monster.name} foi adicionada a pilha de monstros!`);
    },
    addMonsterPileToBoard(state, pile) {
      state.board.monsters.push(pile);
      console.log(`Uma pilha de monstros foi adicionada ao board!`);
    },
    //Domain mutations
    addDomainPileToBoard(state, pile) {
      state.board.domains.push(pile);
      console.log(`Uma pilha de domínios foi adicionada ao board!`);
    },
    addBuildedDomain(state, card){
      state.player.buildedDomains.push(card);
      console.log(`A carta ${card.name} foi adicionada a pilha de domínios construidos!`);
    }
  }
})
export default store;