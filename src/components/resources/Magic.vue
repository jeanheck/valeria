<template>
  <div>
    <h1>Magic</h1>
    <p>
      {{ this.$store.state.player.resources.magic }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Magic'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>