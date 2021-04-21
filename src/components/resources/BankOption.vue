<template>
  <b-button 
    v-on:click="getResource()" 
    :disabled="this.$store.state.game.phase != 'ACTION_PHASE'"
    :variant="resources_data[resource].variant"
    class="resource"
    >
    <b-icon :icon="resources_data[resource].icon" aria-hidden="true"></b-icon> {{resources_data[resource].text}}
  </b-button>
</template>

<script>
import { doingOneAction } from '../../assets/js/phases/phases.js'

export default {
  name: 'BankOption',
  props: {
    resource: String
  },
  data(){
    return {
      resources_data: {
        gold: {
          variant: 'outline-warning',
          icon: 'cash-stack',
          text: 'Gold [G]'
        },
        magic: {
          variant: 'outline-info',
          icon: 'gem',
          text: 'Magic [M]'
        },
        force: {
          variant: 'outline-danger',
          icon: 'lightning-fill',
          text: 'Force [F]'
        },
      }
    }
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
  .resource {
    width: 10%; 
    height: 90px;
    float: left;
    margin: 4px;
  }
  .btn-outline-warning:disabled {
    color: gray;
    border-color: gray;
  }
  .btn-outline-info:disabled {
    color: gray;
    border-color: gray;
  }
  .btn-outline-danger:disabled {
    color: gray;
    border-color: gray;
  }
</style>