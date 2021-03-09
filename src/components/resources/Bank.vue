<template>
  <div class="bank">
    <Dices />
    <BankOption v-for="resource in this.resources" :key="resource" :resource="resource" :ref="resource" />
  </div>
</template>

<script>
import BankOption from './BankOption'
import Dices from '../Dices'

export default {
  name: 'Bank',
  components: {
    BankOption, Dices
  },
  data() {
    return {
      resources: Object.keys(this.$store.state.player.resources).filter(resource => resource != 'victory')
    }
  },
  mounted() {
    this.$children.forEach(child => {
      window.addEventListener('keypress', keyPressed => { 
        if(keyPressed.code === `Key${child.resource.charAt(0).toUpperCase()}` && this.$store.state.game.phase === 'ACTION_PHASE'){
          child.getResource();
        }
      });
    })
  }
}
</script>

<style scoped>
  .bank {
    width: 50%; 
    height: 100px; 
    border: 1px solid black; 
    float: left;
  }
</style>