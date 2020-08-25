import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    player: {
      resources: {
        gold: 0,
        magic: 0,
        force: 0
      },
      hand: []
    },
    board: {
      citizens: [],
      monsters: [],
      domains: []
    }
  },
  mutations: {
    addResource(state, payload) {
      state.player.resources[payload.type] += payload.value;
      console.log(`O player ganhou ${payload.value} ${payload.type}(s)!`);
    },
    removeResource(state, payload) {
      console.log('payload > ', payload)

      state.player.resources[payload.type] -= payload.value;
      console.log(`O player perdeu ${payload.value} ${payload.type}(s)!`);
    },
    addCitizenToHand(state, card) {
      state.player.hand.push(card);
      console.log(`A carta ${card.name} foi adicionada a mão do jogador!`);
    },
    addCitizenPileToBoard(state, pile) {
      state.board.citizens.push(pile);
      console.log(`Uma pilha de cidadãos foi adicionada ao board!`);
    },
    addMonsterPileToBoard(state, pile) {
      state.board.citizens.push(pile);
      console.log(`Uma pilha de monstros foi adicionada ao board!`);
    },
  }
})
export default store;