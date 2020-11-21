<template>
  <button v-on:click="getResource()" :disabled="this.$store.state.game.phase != 'ACTION_PHASE'">Get 1 <span>{{resource}}</span></button>
</template>

<script>
import { doingOneAction } from '../../assets/js/phasesController.js'

export default {
  name: 'BankOption',
  props: {
    resource: String
  },
  methods: {
    getResource() {
      this.$store.commit('addResource', {type: this.resource, value: 1})
      doingOneAction(this.$store);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span {
    text-transform: capitalize;
  }
</style>