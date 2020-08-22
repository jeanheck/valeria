<template>
  <div>
    <h1>Force</h1>
    <p>
      {{ this.$store.state.player.resources.force }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Force'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>