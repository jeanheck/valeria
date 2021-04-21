<template>
  <div class="pile">
    <ul class="status">
      <li class="gold">
        <b-button 
          :disabled="true"
          variant="warning"
          >
          <b-icon icon="cash-stack" aria-hidden="true"></b-icon> 
          {{this.$parent.getCardAtTheTop().cost}}
          <span v-if="!this.$store.state.game.passiveEffects.cancelAdditionalValueToBuy">(+{{getAditionalValueToBuy()}})</span>
        </b-button>
      </li>
    </ul>

    <b-button 
      variant="warning"
      class="action"
      v-on:click="$parent.action()"
      :disabled="this.$store.state.game.phase != 'ACTION_PHASE'"
      >
      {{this.$parent.getActionType()}}    
    </b-button>

    <ul class="about">
      <li class="name">{{this.$parent.getCardAtTheTop().name}}</li>
      <li class="description">{{this.$parent.getCardAtTheTop().rewardDescription}}</li>
    </ul>
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
  .pile{
    position: relative;
    width: 100%; 
    height: 175px; 
  }
  ul {
    list-style: none;
    font-size: 15px;
		margin: 0;
    padding: 0;
  }
  .status li button {
    border-radius: 20px !important;
    margin-top: 3px;
    margin-left: 3px;
    position: absolute;
    top: 45px;
  }
  .about {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    bottom: 0px;
    position: absolute;
  }
  .about .name {
    font-size: 20px;
  }
  .about .description {
    font-size: 12px;
  }
  .action {
    right: 5px;
    top: 75px;
    position: absolute;
  }
</style>
