<template v-on:keyup="keyHandler($event)">
  <div>
    <h1>Dices</h1>
    <p>
      Dice One: {{ this.$store.state.game.diceOne }}
      Dice Two: {{ this.$store.state.game.diceTwo }}
      Sum Dices: {{ this.$store.state.game.sumDices }}
    </p>
    <button v-on:click="getDicesValues()" :disabled="this.$store.state.game.phase != 'ROLLING_PHASE'">Roll Dices</button>
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

</style>