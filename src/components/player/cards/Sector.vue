<template>
  <div class="sector">
    <p>{{title}}</p>

    <Card v-for="card in cards" :card="card" :key="card.id + Math.random()" :type="type"/>
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'Sector',
  props: {
    title: String,
    type: String,
    cards: Array
  },
  components: {
    Card
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
  .sector {
    width: 250px; 
    height: 810px; 
    border: 1px solid black; 
    float: left;
  }
</style>
