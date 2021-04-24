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

<style scoped>
  p {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
  }
  .domains {
    width: 250px; 
    height: 810px; 
    border: 1px solid green; 
    float: left;
  }
</style>
