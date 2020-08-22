<template>
  <div>
    <h1>Gold</h1>
    <p>
      {{ this.$store.state.player.resources.gold }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Gold'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>