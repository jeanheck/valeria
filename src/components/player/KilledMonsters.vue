<template>
  <div id="killed-monsters">
    <h1>Killed Monsters</h1>

		<ul v-for="monster in this.$store.state.player.killedMonsters" :monster="monster" :key="monster.id + Math.random()">
			<li>{{monster.name}}</li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'KilledMonsters'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#killed-monsters {
		border: 1px solid purple;
		width: 20%;
		float: right;
	}
</style>
