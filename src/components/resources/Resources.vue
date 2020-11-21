<template>
  <div>
    <h1>Resources</h1>
    <Resource v-for="resource in Object.keys(this.$store.state.player.resources)" :key="resource" :resource="resource" />
  </div>
</template>

<script>
import Resource from './Resource'

export default {
  name: 'Resources',
  components: {
    Resource
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>