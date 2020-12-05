<template>
  <div v-if="pile.itens.length > 0">
    <span>Cost: {{this.$parent.getCardAtTheTop().cost}}</span><span v-if="this.$store.state.game.passiveEffects.domainsCostOneGoldLess">(-{{getDescountToBuy()}})</span>&nbsp;
    <span>Victory Points: {{this.$parent.getCardAtTheTop().victoryPoints}}</span>&nbsp;
    <span>Requirements: {{this.$parent.getCardAtTheTop().requirements}}</span>&nbsp;
  </div>
</template>

<script>
export default {
  name: 'Domain',
  props: {
    pile: Object
  },
  methods: {
    HaveEnoughResourcesToTheAction(domain){
      const haveGoldEnough = this.$store.state.player.resources.gold >= (domain.cost - this.getDescountToBuy());
      return haveGoldEnough && this.haveRequirementsToBuild(domain.requirements);
    },
    haveRequirementsToBuild(domainRequirements){
      const cardsInHandTypes = this.$store.state.player.hand.map((citizen)=>{
        return citizen.type;
      })
      return domainRequirements.every((requirement) => {
        return cardsInHandTypes.some((cardType) => {
          return requirement === cardType;
        })
      })
    },
    getDescountToBuy(){
      return this.$store.state.game.passiveEffects.domainsCostOneGoldLess ? 1 : 0;
    },
    subtractPlayerResources(domain){
      this.$store.commit('removeResource', {type: 'gold', value: domain.cost - this.getDescountToBuy()})
    },
    checkRewards(domain){
      this.$store.commit('addResource', {type: 'victory', value: domain.victoryPoints})

      if(domain.rewardType === 'IMMEDIATELY'){
        domain.reward(this.$store);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
