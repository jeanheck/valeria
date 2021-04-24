<template>
  <div class="player">
    <Sector title="Citizens in Hand" :cards="getGroupedCards(this.$store.state.player.buyedCitizens)" type='Citizen' />
		<Sector title="Killed Monsters" :cards="getGroupedCards(this.$store.state.player.killedMonsters)" type='Monster' />
		<Sector title="Builded Domains" :cards="getGroupedCards(this.$store.state.player.buildedDomains)" type='Domain' />
  </div>
</template>

<script>
import Sector from './cards/Sector'

export default {
  name: 'Player',
  components: {
    Sector
  },
  methods: {
    getGroupedCards(cards) {
      let uniqueCards = cards.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });

      uniqueCards.forEach(unique => {
        unique['quantity'] = cards.filter(card => card.id == unique.id).length;
      });

      return uniqueCards
    }
  }
}
</script>

<style scoped>
  .player {
    width: 40%;
    height: 800px;
    float: left;
  }
</style>
