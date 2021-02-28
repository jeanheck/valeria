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
    haveRequirementsToBuild(domainRequirements){
      const cardsInHandTypes = this.$store.state.player.buyedCitizens.map((citizen)=>{
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
    haveEnoughResourcesToTheAction(domain){
      let player_gold_points = this.$store.state.player.resources.gold;
      let player_magic_points = this.$store.state.player.resources.magic;

      if(player_gold_points >= 1){
        if((player_magic_points + player_gold_points) >= domain.cost - this.getDescountToBuy()){
          return true && this.haveRequirementsToBuild(domain.requirements);
        }
      }else{
        return false;
      }
    },  
    subtractPlayerResources(domain){
      let player_gold_points = this.$store.state.player.resources.gold;
      let player_magic_points = this.$store.state.player.resources.magic;

      let minimum_gold_require = domain.cost - player_magic_points;
      //Se tiver muitos pontos de mágica, ele precisa de só 1 de gold
      //Mas precisa desse 1 ponto, pelo menos. Construir só com mágica não pode
      minimum_gold_require = minimum_gold_require <= 0 ? 1 : minimum_gold_require;

      let gold_amount_choose = 0;
      do {
        gold_amount_choose = prompt(`Type the Gold Amount you want to use:\nYou have: ${player_gold_points}\nMinimum required: ${minimum_gold_require})\nDomain cost: ${domain.cost})`);
      } while (gold_amount_choose < minimum_gold_require || gold_amount_choose > player_gold_points || gold_amount_choose > domain.cost);

      if(gold_amount_choose == domain.cost){
        //build domain
        this.$store.commit('removeResource', {type: 'gold', value: domain.cost})
      }else{
        //complete with magic points and build domain
        this.$store.commit('removeResource', {type: 'gold', value: gold_amount_choose})
        this.$store.commit('removeResource', {type: 'magic', value: domain.cost - gold_amount_choose})
      }
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
