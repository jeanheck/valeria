<template v-on:keyup="keyHandler($event)">
  <div class="dices">
    <b-button 
      variant="outline-secondary" 
      class="roll-dices"
      v-on:click="getDicesValues()"
      :disabled="this.$store.state.game.phase != 'ROLLING_PHASE'">
      <b-icon icon="dice-3-fill" aria-hidden="true"></b-icon> Roll Dices [R]
    </b-button>

    <ul>
      <li>
        <b-icon icon="dice-6" aria-hidden="true"></b-icon> = {{ this.$store.state.game.diceOne }}
      </li>
      <li>
        <b-icon icon="dice-6-fill" aria-hidden="true"></b-icon> = {{ this.$store.state.game.diceTwo }}
      </li>
      <li>
        <b-icon icon="dice-6" aria-hidden="true"></b-icon> + <b-icon icon="dice-6-fill" aria-hidden="true"></b-icon> = {{ this.$store.state.game.sumDices }}
      </li>
    </ul>
  </div>
</template>

<script>
import { rollDices } from '../assets/js/phases/phases.js'

export default {
  name: 'Dice',
  methods: {
    getDicesValues() {
      rollDices(this.$store);
    }
  },
  created() {
    window.addEventListener('keypress', keyPressed => {
      if(keyPressed.code === 'KeyR' && this.$store.state.game.phase === 'ROLLING_PHASE'){
        this.getDicesValues();
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dices {
    width: 40%;
    float: left;
  }
  .roll-dices {
    width: 70%; 
    height: 90px; 
    margin: 4px; 
    float: left;
  }
  ul {
    list-style: none;
  }
</style>