<template>
  <div>
    <h1>Bank</h1>
    <button v-on:click="getOneGold()" :disabled="this.$store.state.game.phase != 'ACTION_PHASE'">Get 1 Gold</button>
    <button v-on:click="getOneMagic()" :disabled="this.$store.state.game.phase != 'ACTION_PHASE'">Get 1 Magic</button>
    <button v-on:click="getOneForce()" :disabled="this.$store.state.game.phase != 'ACTION_PHASE'">Get 1 Force</button>
  </div>
</template>

<script>
import { doingOneAction } from '../../assets/js/phasesController.js'

export default {
  name: 'Bank',
  methods: {
    getOneGold() {
      this.$store.commit('addResource', {type: 'gold', value: 1})
      doingOneAction(this.$store);
    },
    getOneMagic() {
      this.$store.commit('addResource', {type: 'magic', value: 1})
      doingOneAction(this.$store);
    },
    getOneForce() {
      this.$store.commit('addResource', {type: 'force', value: 1})
      doingOneAction(this.$store);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>