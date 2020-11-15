<template>
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
import { rollDices } from '../assets/js/phasesController.js'

export default {
  name: 'Dice',
  methods: {
    getDicesValues() {
      rollDices(this.$store);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>