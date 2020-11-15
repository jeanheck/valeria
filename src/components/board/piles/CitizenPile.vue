<template>
  <div v-if="pile.itens.length > 0">
    <h1>Pile ({{pile.itens.length}})</h1>
    <span>Name: {{getCardAtTheTop().name}}</span>&nbsp;
    <span>Cost: {{getCardAtTheTop().cost}}</span><span v-if="!this.$store.state.game.passiveEffects.cancelAdditionalValueToBuy">(+{{getAditionalValueToBuy()}})</span>&nbsp;
    <button v-on:click="buy()" :disabled="this.$store.state.game.phase != 'ACTION_PHASE'">Buy</button>
  </div>
</template>

<script>
import { doingOneAction } from '../../../assets/js/phasesController.js'

export default {
  name: 'Pile',
  props: {
    pile: Object
  },
  methods: {
    playerHaveResourcesToBuy(cost){
      return this.$store.state.player.resources.gold >= cost;
    },
    subtractPlayerResources(cost){
      this.$store.commit('removeResource', {type: 'gold', value: cost})
    },
    getAditionalValueToBuy(){
      console.log('this.$store.state.game.passiveEffects.cancelAdditionalValueToBuy > ', this.$store.state.game.passiveEffects.cancelAdditionalValueToBuy)

      const additionalValueToBuy = this.$store.state.player.hand.filter(item => item.id === this.getCardAtTheTop().id).length
      return this.$store.state.game.passiveEffects.cancelAdditionalValueToBuy ? 0 : additionalValueToBuy;
    },
    getCardAtTheTop(){
      return this.pile.itens[0];
    },
    removeCardAtTop(){
      this.pile.itens.shift();
    },
    buy(){
      const cardAtTheTop = this.getCardAtTheTop();
      const cost = cardAtTheTop.cost + this.getAditionalValueToBuy();

      if(this.playerHaveResourcesToBuy(cost)){
        this.subtractPlayerResources(cost);
        this.$store.commit('addCitizenToHand', cardAtTheTop);
        if(this.$store.state.game.passiveEffects.oneMagicWhenYouBuyACitizen){
          this.$store.commit('addResource', {type: 'magic', value: 1})
        }
        this.removeCardAtTop();
        doingOneAction(this.$store);
      }else{
        console.log('não tem recurso pra comprar a carta')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
