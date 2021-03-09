<template>
  <b-button 
    disabled="true"
    :variant="resources_data[resource].variant"
    :class="resources_data[resource].custom ? `resource ${resources_data[resource].custom}` : 'resource'"
    >
    <b-icon :icon="resources_data[resource].icon" aria-hidden="true"></b-icon> {{this.$store.state.player.resources[resource]}}
  </b-button>
</template>

<script>
export default {
  name: 'Resource',
  props: {
    resource: String
  },
  data(){
    return {
      resources_data: {
        gold: {
          variant: 'outline-warning',
          icon: 'cash-stack'
        },
        magic: {
          variant: 'outline-info',
          icon: 'gem'
        },
        force: {
          variant: 'outline-danger',
          icon: 'lightning-fill'
        },
        victory: {
          variant: 'outline-victory',
          icon: 'trophy-fill',
          custom: 'victory'
        },
      }
    }
  },
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
  .victory {
    border: 1px solid purple;
    color: purple;
  }
  .victory:hover {
    border: 1px solid purple;
    color: purple;
  }
</style>