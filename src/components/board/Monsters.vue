<template>
  <div id="monsters">
    <h1>Monsters</h1>

    <Pile v-for="card in this.$store.state.board.citizens" :key="card.id" :card="card" />
  </div>
</template>

<script>
import * as cards from '../../assets/js/cards.js'

import Pile from './Pile'

export default {
  name: 'Citizens',
  components: {
    Pile
  },
  methods: {
    setInitialPiles(){
      this.$store.commit('addCitizenToBoard', cards.citizens.CLERIC)
      this.$store.commit('addCitizenToBoard', cards.citizens.MERCHANT)
      this.$store.commit('addCitizenToBoard', cards.citizens.MERCENARY)
      this.$store.commit('addCitizenToBoard', cards.citizens.ARCHER)
      this.$store.commit('addCitizenToBoard', cards.citizens.FARMER)
      this.$store.commit('addCitizenToBoard', cards.citizens.KNIGHT)
      this.$store.commit('addCitizenToBoard', cards.citizens.ROGUE)
      this.$store.commit('addCitizenToBoard', cards.citizens.CHAMPION)
      this.$store.commit('addCitizenToBoard', cards.citizens.PALADIN)
      this.$store.commit('addCitizenToBoard', cards.citizens.BUTCHER)
    }
  },
  mounted(){
    this.setInitialPiles();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #monsters {
		border: 1px solid red;
		height: 50%;
	}
</style>
