<template>
  <div id="active-effects">
    <h1>Active Effects</h1>

		<ul>
			<li v-if="this.$store.state.game.passiveEffects.cancelAdditionalValueToBuy">
        Não paga valor adicional em cidadãos
      </li>
      <li v-if="this.$store.state.game.passiveEffects.domainsCostOneGoldLess">
        Domínios custam -1 moeda de ouro
      </li>
      <li v-if="this.$store.state.game.passiveEffects.oneMagicWhenYouKillAMonster">
        + 1 mágica para cada monstro morto
      </li>
      <li v-if="this.$store.state.game.passiveEffects.oneMagicWhenYouBuyACitizen">
        + 1 mágica para cada cidadão comprado
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
	#active-effects {
		border: 1px solid rgb(17, 0, 255);
		width: 20%;
		float: right;
	}
</style>
