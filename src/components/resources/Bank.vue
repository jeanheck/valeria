<template>
  <div>
    <h1>Bank</h1>
    
    <BankOption v-for="resource in Object.keys(this.$store.state.player.resources).filter(resource => resource != 'victory')" :key="resource" :resource="resource" />
  </div>
</template>

<script>
import BankOption from './BankOption'

export default {
  name: 'Bank',
  components: {
    BankOption
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>