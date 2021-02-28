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
    haveEnoughResourcesToTheAction(citizen){
      let player_gold_points = this.$store.state.player.resources.gold;
      let player_magic_points = this.$store.state.player.resources.magic;

      if(player_gold_points >= 1){
        if((player_magic_points + player_gold_points) >= citizen.cost - this.getAditionalValueToBuy()){
          return true;
        }
      }else{
        return false;
      }
    },  
    subtractPlayerResources(citizen){
      let player_gold_points = this.$store.state.player.resources.gold;
      let player_magic_points = this.$store.state.player.resources.magic;

      let minimum_gold_require = citizen.cost - player_magic_points;
      //Se tiver muitos pontos de mágica, ele precisa de só 1 de gold
      //Mas precisa desse 1 ponto, pelo menos. Comprar só com mágica não pode
      minimum_gold_require = minimum_gold_require <= 0 ? 1 : minimum_gold_require;

      let gold_amount_choose = 0;
      do {
        gold_amount_choose = prompt(`Type the Gold Amount you want to use:\nYou have: ${player_gold_points}\nMinimum required: ${minimum_gold_require})\nCitizen cost: ${citizen.cost})`);
      } while (gold_amount_choose < minimum_gold_require || gold_amount_choose > player_gold_points || gold_amount_choose > citizen.cost);

      if(gold_amount_choose == citizen.cost){
        //buy citizen
        this.$store.commit('removeResource', {type: 'gold', value: citizen.cost})
      }else{
        //complete with magic points and buy citizen
        this.$store.commit('removeResource', {type: 'gold', value: gold_amount_choose})
        this.$store.commit('removeResource', {type: 'magic', value: citizen.cost - gold_amount_choose})
      }
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
