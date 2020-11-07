<template>
  <div id="hand">
    <h1>Player cards</h1>

		<ul v-for="card in this.$store.state.player.hand" :card="card" :key="card.id + Math.random()">
			<li>{{card.name}}</li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'Hand'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#hand {
		border: 1px solid black;
		width: 20%;
		float: right;
	}
</style>
