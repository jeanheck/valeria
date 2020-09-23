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
    }
  },
  mutations: {
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
    addCitizenPileToBoard(state, pile) {
      state.board.citizens.push(pile);
      console.log(`Uma pilha de cidadãos foi adicionada ao board!`);
    },
    removeCitizenFromPile(state, pileId) {
      state.board.citizens.find(pile => pile.id === pileId).itens.shift();
      console.log(`Um cidadão foi retirado da pilha!`);
    },
    addKilledMonster(state, card) {
      state.player.killedMonsters.push(card);
      console.log(`A carta ${card.name} foi adicionada a pilha de monstros mortos!`);
    },
    addMonsterPileToBoard(state, pile) {
      state.board.monsters.push(pile);
      console.log(`Uma pilha de monstros foi adicionada ao board!`);
    },
    addDomainPileToBoard(state, pile) {
      state.board.domains.push(pile);
      console.log(`Uma pilha de domínios foi adicionada ao board!`);
    },
  }
})
export default store;