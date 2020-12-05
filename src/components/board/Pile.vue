<template>
  <div v-if="pile.itens.length > 0">
    <h1>Pile ({{pile.itens.length}})</h1>
    <span>Name: {{getCardAtTheTop().name}}</span>&nbsp;
    <span>Reward: {{getCardAtTheTop().rewardDescription}}</span>&nbsp;

    <Pile :is="type" :pile="pile" ref="pile" />

    <button v-on:click="action()" :disabled="this.$store.state.game.phase != 'ACTION_PHASE'">{{getActionType()}}</button>
  </div>
</template>

<script>
import Citizen from './piles/Citizen'
import Monster from './piles/Monster'
import Domain from './piles/Domain'
import { doingOneAction } from '../../assets/js/phasesController.js'

export default {
  name: 'Pile',
  components: {
    Citizen, Monster, Domain
  },
  props: {
    pile: Object,
    type: String
  },
  methods: {
    getActionType(){
      switch(this.type){
        case 'Citizen':
          return 'Buy';
        case 'Domain':
          return 'Build';
        case 'Monster':
          return 'Kill';
      }
    },
    getCardAtTheTop(){
      return this.pile.itens[0];
    },
    removeCardAtTop(){
      this.pile.itens.shift();
    },
    action(){
      const card = this.getCardAtTheTop();
      const type = this.type;

      if(this.$refs.pile.HaveEnoughResourcesToTheAction(card)){
        this.$refs.pile.subtractPlayerResources(card);
        this.$store.commit('giveTheCardToPlayer', {type, card});

        this.$refs.pile.checkRewards(card);

        this.removeCardAtTop();
        doingOneAction(this.$store);
      }else{
        console.log('A ação não pode ser concluída. Você não tem recursos para realizá-la.')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
