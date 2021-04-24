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

<style scoped>
  p {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
  }
  .citizens {
    width: 250px; 
    height: 810px; 
    border: 1px solid blue; 
    float: left;
  }
</style>
