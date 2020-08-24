<template>
  <div id="hand">
    <h1>Player cards</h1>

		<ul v-for="card in this.$store.state.player.hand" :card="card" :key="card.id + Math.random()">
			<li>{{card.name}}</li>
		</ul>
  </div>
</template>

<script>
import * as cards from '../../assets/js/cards.js'

export default {
  name: 'Hand',
  methods: {
    setInitialHand() {
      this.$store.commit('addCitizenToHand', cards.citizens.INIT_FARMER)
      this.$store.commit('addCitizenToHand', cards.citizens.INIT_KNIGHT)
    },
    log(card) {
      console.log(`O efeito da carta ${card.name} foi ativado!`)
    }
	},
	mounted(){
    this.setInitialHand();

		this.$parent.$on('update-resources', (diceOne, diceTwo, sumDices) => {
      this.$store.state.player.hand.forEach((card) => {
        card.diceValues.forEach((value) => {
          if(value === diceOne) {
            card.reward(this.$store);
            this.log(card);
          }
          if(value === diceTwo) {
            card.reward(this.$store);
            this.log(card);
          }
          if(value === sumDices) {
            card.reward(this.$store);
            this.log(card);
          }
        });
			})
    });
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#hand {
		border: 1px solid black;
		width: 20%;
		float: right;
	}
</style>
