<template>
  <div v-if="pile.length > 0">
    <h1>Pile ({{pile.length}})</h1>
    <span>Name: {{getCardAtTheTop().name}}</span>&nbsp;
    <span>Cost: {{getCardAtTheTop().cost}} (+{{getAditionalValueToBuy()}})</span>&nbsp;
    <button v-on:click="buy()">Buy</button>
  </div>
</template>

<script>
export default {
  name: 'Pile',
  props: {
    pile: Array
  },
  methods: {
    playerHaveResourcesToBuy(cost){
      return this.$store.state.player.resources.gold >= cost;
    },
    subtractPlayerResources(cost){
      this.$store.commit('removeResource', {type: 'gold', value: cost})
    },
    getAditionalValueToBuy(){
      return this.$store.state.player.hand.filter(item => item.id === this.getCardAtTheTop().id).length;
    },
    getCardAtTheTop(){
      return this.pile[0];
    },
    removeCardAtTop(){
      this.pile.shift();
    },
    buy(){
      const cardAtTheTop = this.getCardAtTheTop();
      const cost = cardAtTheTop.cost + this.getAditionalValueToBuy();

      if(this.playerHaveResourcesToBuy(cost)){
        this.subtractPlayerResources(cost);
        this.$store.commit('addCitizenToHand', cardAtTheTop);
        this.removeCardAtTop();
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
