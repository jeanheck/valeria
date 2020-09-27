<template>
  <div id="builded-domains">
    <h1>Builded Domains</h1>

		<ul v-for="domain in this.$store.state.player.buildedDomains" :domain="domain" :key="domain.id + Math.random()">
			<li>{{domain.name}}</li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'BuildedDomains'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#builded-domains {
		border: 1px solid yellow;
		width: 20%;
		float: right;
	}
</style>
