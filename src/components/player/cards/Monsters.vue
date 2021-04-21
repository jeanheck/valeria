<template>
  <div class="monsters">
    <p>{{title}}</p>

    <Monster v-for="card in cards" :card="card" :key="card.id + Math.random()"/>
  </div>
</template>

<script>
import Monster from './Monster'

export default {
  name: 'Monsters',
  props: {
    title: String,
    cards: Array
  },
  components: {
    Monster
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    margin-bottom: 10px;
  }
  .monsters {
    width: 250px; 
    height: 810px; 
    border: 1px solid brown; 
    float: left;
  }
</style>
