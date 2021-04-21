<template>
  <div class="menu-options">
    <b-button 
      variant="outline-secondary"
      v-on:click="restart()"
      class="button">
      Restart Game    
    </b-button>
  </div>
</template>

<script>
import { restartGame } from '../assets/js/phases/phases.js'

export default {
  name: 'MenuOptions',
  methods: {
    restart() {
      restartGame(this.$store);
    }
  }
}
</script>

<style scoped>
  .menu-options {
    width: 90%; 
    height: 350px;
    margin: 10px; 
    border: 1px solid black;
    text-align: center;
    padding-top: 10px;
  }
  .button {
    border-radius: 20px !important;
  }
</style>