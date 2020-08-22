<template>
  <div>
    <h1>Pile</h1>

    <span>Name: {{card.name}}</span>
    <button v-on:click="counter += 1">Buy</button>
  </div>
</template>

<script>
export default {
  name: 'Pile',
  props: {
    card: Object
  },
  methods: {
    buy(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>