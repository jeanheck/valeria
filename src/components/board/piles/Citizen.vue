<template>
  <div>
    <span>Cost: {{this.$parent.getCardAtTheTop().cost}}</span><span v-if="!this.$store.state.game.passiveEffects.cancelAdditionalValueToBuy">(+{{getAditionalValueToBuy()}})</span>&nbsp;
    <span>Tipo: {{this.$parent.getCardAtTheTop().type}}</span>&nbsp;
    <span>Dado(s): {{this.$parent.getCardAtTheTop().diceValues}}</span>&nbsp;
  </div>
</template>

<script>
export default {
  name: 'Citizen',
  props: {
    pile: Object
  },
  methods: {
    HaveEnoughResourcesToTheAction(citizen){
      return this.$store.state.player.resources.gold >= (citizen.cost + this.getAditionalValueToBuy());
    },
    subtractPlayerResources(citizen){
      this.$store.commit('removeResource', {type: 'gold', value: citizen.cost});
    },
    checkRewards(){
      if(this.$store.state.game.passiveEffects.oneMagicWhenYouBuyACitizen){
        this.$store.commit('addResource', {type: 'magic', value: 1});
      }
    },
    getAditionalValueToBuy(){
      const additionalValueToBuy = this.$store.state.player.buyedCitizens.filter(item => item.id === this.$parent.getCardAtTheTop().id).length
      return this.$store.state.game.passiveEffects.cancelAdditionalValueToBuy ? 0 : additionalValueToBuy;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
