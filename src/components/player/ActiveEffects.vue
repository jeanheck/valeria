<template>
  <div class="active-effects">
		<ul>
			<li v-if="this.$store.state.game.passiveEffects.cancelAdditionalValueToBuy">
				<b-icon icon="cash" aria-hidden="true"></b-icon>
				Não paga valor adicional em cidadãos
			</li>
			<li v-if="this.$store.state.game.passiveEffects.domainsCostOneGoldLess">
				<b-icon icon="building" aria-hidden="true"></b-icon>
				Domínios custam -1 moeda de ouro
			</li>
			<li v-if="this.$store.state.game.passiveEffects.oneMagicWhenYouKillAMonster">
				<b-icon icon="gem" aria-hidden="true"></b-icon>
				+ 1 mágica para cada monstro que você mate
			</li>
			<li v-if="this.$store.state.game.passiveEffects.oneMagicWhenYouBuyACitizen">
				<b-icon icon="people-fill" aria-hidden="true"></b-icon>
				+ 1 mágica para cada cidadão que você compre
			</li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'ActiveEffects'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.active-effects {
    width: 50%; 
    height: 90px; 
    border: 1px solid gray;
		border-radius: 4px;
    margin: 4px; 
    float: right;
  }
  ul {
    list-style: none;
    font-size: 15px;
		margin: 0; /* To remove default bottom margin */ 
    padding: 0; /* To remove default left padding */
  }
</style>
