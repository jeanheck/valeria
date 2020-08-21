<template>
  <div id="player-cards">
    <h1>Player Cards</h1>
	
		<ul v-for="card in this.playerCardList" :card="card" :key="card.id">
			<li>{{card.name}}</li>
		</ul>
  </div>
</template>

<script>
import * as cards from '../assets/js/cards.js'

export default {
  name: 'PlayerCards',
  data () {
    return {
			playerCardList: []
		}
  },
  methods: {
    setInitialGameResources() {
      this.playerCardList = [
        cards.citizens.INIT_FARMER,
        cards.citizens.INIT_KNIGHT,
        cards.citizens.PALADIN,
        cards.citizens.BLACKSMITH,
        cards.citizens.ARCHER,
        cards.citizens.LORD_OF_WAR,
        cards.citizens.KNIGHT,
        cards.citizens.BUTCHER
      ]
      this.$parent.$emit('add-gold-points', 2)
      this.$parent.$emit('add-magic-points', 1)
    },
    log(card) {
      console.log(`O efeito da carta ${card.name} foi ativado!`)
    }
	},
	mounted(){
    this.setInitialGameResources();

		this.$parent.$on('update-resources', (diceOne, diceTwo, sumDices) => {
      this.playerCardList.forEach((card) => {
        card.diceValues.forEach((value) => {
          if(value === diceOne) {
            card.reward(this); 
            this.log(card);
          }
          if(value === diceTwo) {
            card.reward(this); 
            this.log(card);
          }
          if(value === sumDices) {
            card.reward(this); 
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
	#player-cards {
		border: 1px solid black;
		width: 50%;
		float: right;
	}
</style>