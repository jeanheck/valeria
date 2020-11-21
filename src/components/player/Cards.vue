<template>
  <div id="cards">
    <h1>{{title}}</h1>

		<ul v-for="card in cards" :card="card" :key="card.id + Math.random()">
			<li>{{card.name}}</li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  props: {
    title: String,
    cards: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#cards {
		border: 1px solid black;
	}
</style>
