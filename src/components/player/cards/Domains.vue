<template>
  <div class="domains">
    <p>{{title}}</p>

    <Domain v-for="card in cards" :card="card" :key="card.id + Math.random()"/>
  </div>
</template>

<script>
import Domain from './Domain'

export default {
  name: 'Domains',
  props: {
    title: String,
    cards: Array
  },
  components: {
    Domain
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    margin-bottom: 10px;
  }
  .domains {
    width: 250px; 
    height: 810px; 
    border: 1px solid green; 
    float: left;
  }
</style>
