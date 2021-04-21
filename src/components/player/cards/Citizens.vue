<template>
  <div class="citizens">
    <p>{{title}}</p>

    <Citizen v-for="card in cards" :card="card" :key="card.id + Math.random()"/>
  </div>
</template>

<script>
import Citizen from './Citizen'

export default {
  name: 'Citizens',
  props: {
    title: String,
    cards: Array
  },
  components: {
    Citizen
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    margin-bottom: 10px;
  }
  .citizens {
    width: 250px; 
    height: 810px; 
    border: 1px solid blue; 
    float: left;
  }
</style>
