import {player as player} from './player.js';
import {board as board} from './board.js';
import {game as game} from './game.js';

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    player: player,
    board: board,
    game: game
  }
})

export default store;