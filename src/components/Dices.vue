<template>
  <div>
    <h1>Dices</h1>
    <p>
      Dice One: {{ diceOne }}
      Dice Two: {{ diceTwo }}
      Sum Dices: {{ sumDices }}
    </p>
    <button v-on:click="rollDices">Roll Dices</button>
  </div>
</template>

<script>
export default {
  name: 'Dice',
  props: {
    name: String
  },
  data () {
    return {
      diceOne: '',
      diceTwo: '',
      sumDices: ''
    }
  },
  methods: {
    rollDices() {
      this.diceOne = this.rollDice();
      this.diceTwo = this.rollDice();
      this.sumDices = this.diceOne + this.diceTwo;
      this.$parent.$emit('update-resources', this.diceOne, this.diceTwo, this.sumDices)
    },
    rollDice(){
      return Math.floor(Math.random() * 6) + 1; 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>