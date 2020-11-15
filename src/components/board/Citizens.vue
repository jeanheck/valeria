<template>
  <div id="citizens">
    <h1>Citizens</h1>

    <CitizenPile v-for="pile in this.$store.state.board.citizens" :key="pile.id" :pile="pile" />
  </div>
</template>

<script>
import * as cards from '../../assets/js/cards.js'

import CitizenPile from './piles/CitizenPile'

export default {
  name: 'Citizens',
  components: {
    CitizenPile
  },
  methods: {
    createCitizenPile(citizen){
      let pile = {
        id: citizen.id,
        cost: citizen.cost,
        type: citizen.type,
        itens: []
      };
      while(pile.itens.length < 5){
        pile.itens.push(citizen);
      }
      return pile;
    },
    addCitizensToBoard(citizens){
      citizens.forEach((citizen) => {
        this.$store.commit('addCitizenPileToBoard', this.createCitizenPile(citizen));
      })
    },
    setInitialPiles(){
      const citizens = [ 
        cards.citizens.CLERIC,
        cards.citizens.MERCHANT,
        cards.citizens.MERCENARY,
        cards.citizens.ARCHER,
        cards.citizens.FARMER,
        cards.citizens.KNIGHT,
        cards.citizens.ROGUE,
        cards.citizens.CHAMPION,
        cards.citizens.PALADIN,
        cards.citizens.BUTCHER
      ];

      this.addCitizensToBoard(citizens);
    }
  },
  mounted(){
    this.setInitialPiles();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #citizens {
		border: 1px solid blue;
    float: left;
		height: 50%;
    width: 30%;
	}
</style>
