<template>
  <div>
    <h1>Citizen</h1>

    <span>Name: {{card.name}}</span>&nbsp;
    <span>Cost: {{card.cost}}</span>&nbsp;
    <button v-on:click="buy(card)">Buy</button>
  </div>
</template>

<script>
export default {
  name: 'Citizen',
  props: {
    card: Object
  },
  methods: {
    playerHaveResourcesToBuy(cost){
      return this.$store.state.player.resources.gold >= cost;
    },
    subtractPlayerResources(cost){
      this.$store.commit('removeResource', {type: 'gold', value: cost})
    },
    getAditionalValueToBuy(card){
      return this.$store.state.player.hand.filter(item => item.id === card.id).length;
    },
    buy(card){
      const cost = card.cost + this.getAditionalValueToBuy(card);

      if(this.playerHaveResourcesToBuy(cost)){
        this.subtractPlayerResources(cost);
        this.$store.commit('addCitizenToHand', card)
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
