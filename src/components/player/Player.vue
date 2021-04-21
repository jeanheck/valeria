<template>
  <div class="player">
    <Citizens :title="'Citizens in Hand'" :cards="this.$store.state.player.buyedCitizens" />
    <Monsters :title="'Killed Monsters'" :cards="this.$store.state.player.killedMonsters" />
		<Domains :title="'Builded Domains'" :cards="this.$store.state.player.buildedDomains" />
  </div>
</template>

<script>
import Citizens from './cards/Citizens'
import Monsters from './cards/Monsters'
import Domains from './cards/Domains'

export default {
  name: 'Player',
  components: {
    Citizens, Monsters, Domains
  },
}
</script>

<style scoped>
  .player {
    width: 40%;
    height: 800px;
    float: left;
  }
</style>
