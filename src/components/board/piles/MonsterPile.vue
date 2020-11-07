<template>
  <div v-if="pile.length > 0">
    <h1>Pile ({{pile.length}})</h1>
    <span>Name: {{getCardAtTheTop().name}}</span>&nbsp;
    <span>Force: {{getCardAtTheTop().force}}</span>&nbsp;
    <button v-on:click="kill()" :disabled="this.$store.state.game.phase != 'ACTION_PHASE'">Kill</button>
  </div>
</template>

<script>
import { doingOneAction } from '../../../assets/js/phasesController.js'

export default {
  name: 'Pile',
  props: {
    pile: Array
  },
  methods: {
    playerHaveResourcesToKill(monster){
      const haveForceEnough = this.$store.state.player.resources.force >= monster.force;
      const haveMagicEnough = monster.magic ? this.$store.state.player.resources.magic >= monster.magic : true;

      return haveForceEnough && haveMagicEnough;
    },
    subtractPlayerResources(monster){
      this.$store.commit('removeResource', {type: 'force', value: monster.force})
      if(monster.magic) this.$store.commit('removeResource', {type: 'magic', value: monster.magic})
    },
    getCardAtTheTop(){
      return this.pile[0];
    },
    removeCardAtTop(){
      this.pile.shift();
    },
    kill(){
      const killedMonster = this.getCardAtTheTop();

      if(this.playerHaveResourcesToKill(killedMonster)){
        this.subtractPlayerResources(killedMonster);
        this.$store.commit('addKilledMonster', killedMonster);
        killedMonster.reward(this.$store);
        this.removeCardAtTop();
        doingOneAction(this.$store);
      }else{
        console.log('Não tem recurso pra matar o monstro')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
