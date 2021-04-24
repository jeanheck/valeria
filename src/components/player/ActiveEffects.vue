<template>
  <div class="active-effects">
		<ul>
			<li v-for="effect in effects" :key="effect.name">
				<span v-if="effect.status">
					<b-icon :icon="effect.icon" aria-hidden="true"></b-icon>
					{{effect.name}}
				</span>
			</li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'ActiveEffects',
	data(){
    return {
      effects: [
				{
					name: 'Não paga valor adicional em cidadãos',
					status: this.$store.state.game.passiveEffects.cancelAdditionalValueToBuy,
					icon: 'cash'
				},
				{
					name: 'Domínios custam -1 moeda de ouro',
					status: this.$store.state.game.passiveEffects.domainsCostOneGoldLess,
					icon: 'building'
				},
				{
					name: '+ 1 mágica para cada monstro que você mate',
					status: this.$store.state.game.passiveEffects.oneMagicWhenYouKillAMonster,
					icon: 'gem'
				},
				{
					name: '+ 1 mágica para cada cidadão que você compre',
					status: this.$store.state.game.passiveEffects.oneMagicWhenYouBuyACitizen,
					icon: 'people-fill'
				},
			]
    }
  },
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
		margin: 0;
    padding: 0;
		margin-left: 10px;
  }
</style>
