<template>
  <div>
    <h1>Bank</h1>

    <div>
      <b-button size="sm" class="mb-2">
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Settings
      </b-button>
      <br>
      <b-button variant="primary" class="mb-2">
        Pay now <b-icon icon="credit-card" aria-hidden="true"></b-icon>
      </b-button>
      <br>
      <b-button variant="outline-info" class="mb-2">
        <b-icon icon="power" aria-hidden="true"></b-icon> Logout
      </b-button>
      <br>
      <b-button size="lg" variant="primary" class="mb-2">
        <b-icon icon="question-circle-fill" aria-label="Help"></b-icon>
      </b-button>
    </div>
    
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