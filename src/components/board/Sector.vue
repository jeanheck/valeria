<template>
  <div :class="sector_data[pileType].class">
    <Pile v-for="pile in piles" :key="pile.id" :pile="pile" :type="pileType"/>
  </div>
</template>

<script>
import Pile from './Pile'

export default {
  name: 'Sector',
  props: {
    piles: Array,
    pileType: String
  },
  components: {
    Pile
  },
  data(){
    return {
      sector_data: {
        Citizen: {
          class: 'citizens'
        },
        Monster: {
          class: 'monsters'
        },
        Domain: {
          class: 'domains'
        },
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .monsters {
    width: 100%; 
    height: 200px; 
    border: 1px solid brown;
  }
  .citizens {
    width: 100%; 
    height: 380px; 
    border: 1px solid blue;
  }
  .domains {
    width: 100%; 
    height: 200px; 
    border: 1px solid green;
  }
</style>
