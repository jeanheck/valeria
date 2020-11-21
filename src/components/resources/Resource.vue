<template>
  <div>
    <h1>{{resource}}</h1>
    <p>
      {{ this.$store.state.player.resources[resource] }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Resource',
  props: {
    resource: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-transform: capitalize;
  }
</style>