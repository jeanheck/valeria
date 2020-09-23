<template>
  <div v-if="pile.length > 0">
    <h1>Pile ({{pile.length}})</h1>
    <span>Name: {{getCardAtTheTop().name}}</span>&nbsp;
    <span>Cost: {{getCardAtTheTop().cost}}</span>&nbsp;
    <span>Requirements: {{getCardAtTheTop().requirements}}</span>&nbsp;
    <button v-on:click="build()">Build</button>
  </div>
</template>

<script>
export default {
  name: 'Pile',
  props: {
    pile: Array
  },
  methods: {
    playerHaveResourcesToBuild(domain){
      const haveGoldEnough = this.$store.state.player.resources.gold >= domain.cost;
      const haveRequirements = true;

      return haveGoldEnough && haveRequirements;
    },
    subtractPlayerResources(domain){
      this.$store.commit('removeResource', {type: 'gold', value: domain.cost})
    },
    getCardAtTheTop(){
      return this.pile[0];
    },
    removeCardAtTop(){
      this.pile.shift();
    },
    build(){
      const buildedDomain = this.getCardAtTheTop();

      if(this.playerHaveResourcesToBuild(buildedDomain)){
        this.subtractPlayerResources(buildedDomain);
        this.$store.commit('addBuildedDomain', buildedDomain);
        this.removeCardAtTop();
      }else{
        console.log('Não tem recurso/requisitos mínimos para construir o domínio')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
