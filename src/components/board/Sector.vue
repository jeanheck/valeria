<template>
  <div id="sector">
    <h1>{{title}}</h1>
    <Pile v-for="pile in piles" :key="pile.id" :pile="pile" :is="pileType"/>
  </div>
</template>

<script>
import Pile from './Pile'
import CitizenPile from './piles/CitizenPile'
import MonsterPile from './piles/MonsterPile'
import DomainPile from './piles/DomainPile'

export default {
  name: 'Sector',
  props: {
    title: String,
    piles: Array,
    pileType: String
  },
  components: {
    Pile, CitizenPile, MonsterPile, DomainPile
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
