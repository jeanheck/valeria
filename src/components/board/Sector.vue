<template>
  <div id="sector">
    <h1>{{title}}</h1>
    <Pile v-for="pile in piles" :key="pile.id" :pile="pile" :type="pileType"/>
  </div>
</template>

<script>
import Pile from './Pile'

export default {
  name: 'Sector',
  props: {
    title: String,
    piles: Array,
    pileType: String
  },
  components: {
    Pile
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #sector {
		border: 1px solid black;
    float: left;
		height: 50%;
    width: 30%;
	}
</style>
