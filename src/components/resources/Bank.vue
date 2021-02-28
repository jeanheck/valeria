<template>
  <div>
    <h1>Bank</h1>
    
    <BankOption v-for="resource in this.resources" :key="resource" :resource="resource" :ref="resource" />
  </div>
</template>

<script>
import BankOption from './BankOption'

export default {
  name: 'Bank',
  components: {
    BankOption
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>