<template>
  <div id="player-cards">
		<Cards :title="'Citizens in Hand'" :cards="this.$store.state.player.buyedCitizens" />
    <Cards :title="'Killed Monsters'" :cards="this.$store.state.player.killedMonsters" />
		<Cards :title="'Builded Domains'" :cards="this.$store.state.player.buildedDomains" />
  </div>
</template>

<script>
import Cards from './Cards'

export default {
  name: 'PlayerCards',
  components: {
    Cards
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#player-cards {
    border: 1px solid black;
		width: 20%;
		float: right;
	}
</style>
