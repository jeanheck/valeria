<template>
  <div>
    <h1>Victory</h1>
    <p>
      {{ this.$store.state.player.resources.victory }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Victory'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>