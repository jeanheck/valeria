<template>
  <div class="game-results">
    <ul class="results">
      <!-- Only victory points -->
      <li>
        <b-button 
          :disabled="true"
          class="victory"
          >
          <b-icon icon="trophy-fill" aria-hidden="true"></b-icon>
        </b-button>
        &nbsp;<span><!-- 99--></span>
      </li>
      <!-- Victory points for monsters -->
      <li>
        <b-button 
          :disabled="true"
          class="victory"
          >
          <b-icon icon="trophy-fill" aria-hidden="true"></b-icon> <span class="monster">M</span>
        </b-button>
        &nbsp;<span><!-- 99--></span>
      </li>
      <!-- Victory points for domains -->
      <li>
        <b-button 
          :disabled="true"
          class="victory"
          >
          <b-icon icon="trophy-fill" aria-hidden="true"></b-icon> <span class="domain">D</span>
        </b-button>
        &nbsp;<span><!-- 99--></span>
      </li>
      <!-- Victory points for coins -->
      <li>
        <b-button 
          :disabled="true"
          class="victory"
          >
          <b-icon icon="trophy-fill" aria-hidden="true"></b-icon> (<b-icon-cash-stack></b-icon-cash-stack>, <b-icon-gem></b-icon-gem>, <b-icon-lightning-fill></b-icon-lightning-fill>)
        </b-button>
        <span><!-- 99--></span>
      </li>
      <!-- Victory points for domains and citizens type(s) -->
      <li>
        <b-button 
          :disabled="true"
          class="victory"
          >
          <b-icon icon="trophy-fill" aria-hidden="true"></b-icon> (<b-icon-hammer></b-icon-hammer>, <b-icon-key></b-icon-key>, <b-icon-bug></b-icon-bug>)
        </b-button>
        <span><!-- 99--></span> 
      </li>
      <!-- Total -->
      <li><b>Total:</b> <span>{{ this.$store.state.player.resources.victory }}</span></li> 
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GameResults',
  methods: {
    
  }
}
</script>

<style scoped>
  .game-results {
    width: 90%; 
    height: 85%;
    border: 1px solid black;
    text-align: center;
    margin: 5%;
  }
  .results {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .results li {
    margin: 5px;
  }
  .victory:disabled {
    color: white;
    background-color: purple;
    border-color: purple;
    border-radius: 20px !important;
  }
  .monster {
    color: white;
    /*font-size: 18px;*/
    background-color: brown;
    padding: 3px;
    border: 1px solid white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
  .domain {
    color: white;
    /*font-size: 18px;*/
    background-color: green;
    padding: 3px;
    border: 1px solid white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
</style>