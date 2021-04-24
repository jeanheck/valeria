<template>
  <div 
    v-if="pile.itens.length > 0"
    :class="pile_data[type].class" 
    :style="{ 
      backgroundImage: 'url(' + getImage() + ')', 
      backgroundSize: pile_data[type].backgroundSize
    }">

    <Pile :is="type" :pile="pile" ref="pile" />
  </div>
</template>

<script>
import Citizen from './piles/Citizen'
import Monster from './piles/Monster'
import Domain from './piles/Domain'
import { doingOneAction } from '../../../assets/js/phases/phases.js'

export default {
  name: 'Pile',
  components: {
    Citizen, Monster, Domain
  },
  props: {
    pile: Object,
    type: String
  },
  data(){
    return {
      pile_data: {
        Citizen: {
          class: 'citizen',
          backgroundSize: '180px 250px'
        },
        Monster: {
          class: 'monster',
          backgroundSize: '180px 240px'
        },
        Domain: {
          class: 'domain',
          backgroundSize: '180px 250px'
        },
      }
    }
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

      if(this.$refs.pile.haveEnoughResourcesToTheAction(card)){
        this.$refs.pile.subtractPlayerResources(card);
        this.$store.commit('giveCardToPlayer', {type, card});

        this.$refs.pile.checkRewards(card);

        this.removeCardAtTop();

        doingOneAction(this.$store);
      }else{
        console.log('A ação não pode ser concluída. Você não tem recursos para realizá-la.')
      }
    },
    getImage(){
      return require(`../../../assets/images/${this.type}/${this.getCardAtTheTop().id}.jpg`);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .monster {
    width: 19%; 
    height: 175px; 
    border: 1px solid brown;
    margin-top: 10px;
    margin-left: 7px;
    float: left;
  }
  .citizen {
    width: 19%; 
    height: 175px; 
    border: 1px solid blue;
    margin-top: 10px;
    margin-left: 7px;
    float: left;
  }
  .domain {
    width: 19%; 
    height: 175px; 
    border: 1px solid green;
    margin-top: 10px;
    margin-left: 7px;
    float: left;
  }
</style>
