<template>
  <div class="pile" v-if="pile.itens.length > 0">
    <ul class="status">
      <li class="force">
        <b-button 
          :disabled="true"
          variant="danger"
          >
          <b-icon icon="lightning-fill" aria-hidden="true"></b-icon> {{this.$parent.getCardAtTheTop().force}}
        </b-button>
      </li>
      <li class="magic" v-if="this.$parent.getCardAtTheTop().magic">
        <b-button 
          :disabled="true"
          variant="info"
          >
          <b-icon icon="gem" aria-hidden="true"></b-icon> {{this.$parent.getCardAtTheTop().magic}}
        </b-button>
      </li>
      <li class="victory">
        <b-button 
          :disabled="true"
          class="victory"
          >
          <b-icon icon="trophy-fill" aria-hidden="true"></b-icon> {{this.$parent.getCardAtTheTop().victoryPoints}}
        </b-button>
      </li>
    </ul>

    <b-button 
      variant="danger"
      class="action"
      v-on:click="$parent.action()"
      :disabled="this.$store.state.game.phase != 'ACTION_PHASE'"
      >
      {{this.$parent.getActionType()}}    
    </b-button>

    <ul class="about">
      <li class="name">{{this.$parent.getCardAtTheTop().name}}</li>
      <li class="description">{{this.$parent.getCardAtTheTop().rewardDescription}}</li>
    </ul>
  </div>
</template>

<script>
/**
 * 
 * 
  
 */
export default {
  name: 'Monster',
  props: {
    pile: Object
  },
  methods: {
    haveEnoughResourcesToTheAction(monster){
      let player_magic_points = this.$store.state.player.resources.magic;
      let player_force_points = this.$store.state.player.resources.force;

      let left_player_magic_points = monster.magic ? player_magic_points - monster.magic : player_magic_points;

      if(player_force_points >= 1){
        if((left_player_magic_points + player_force_points) >= monster.force){
          return true;
        }
      }else{
        return false;
      }
    },  
    subtractPlayerResources(monster){
      let player_magic_points = this.$store.state.player.resources.magic;
      let player_force_points = this.$store.state.player.resources.force;

      let left_player_magic_points = monster.magic ? player_magic_points - monster.magic : player_magic_points;

      let minimum_force_require = monster.force - left_player_magic_points;
      //Se tiver muitos pontos de mágica, ele precisa de só 1 de força
      //Mas precisa desse 1 ponto, pelo menos. Matar só com mágica não pode
      minimum_force_require = minimum_force_require <= 0 ? 1 : minimum_force_require;

      let force_amount_choose = 0;
      do {
        force_amount_choose = prompt(`Type the Force Amount you want to use:\nYou have: ${player_force_points}\nMinimum required: ${minimum_force_require})\nMonster force: ${monster.force})`);
      } while (force_amount_choose < minimum_force_require || force_amount_choose > player_force_points || force_amount_choose > monster.force);

      if(force_amount_choose == monster.force){
        //kill monster
        this.$store.commit('removeResource', {type: 'force', value: monster.force})
      }else{
        //complete with magic points and kill monster
        this.$store.commit('removeResource', {type: 'force', value: force_amount_choose})
        this.$store.commit('removeResource', {type: 'magic', value: monster.force - force_amount_choose})
      }
      if(monster.magic) this.$store.commit('removeResource', {type: 'magic', value: monster.magic})
    },
    checkRewards(monster){
      monster.reward(this.$store);
      this.$store.commit('addResource', {type: 'victory', value: monster.victoryPoints})
      if(this.$store.state.game.passiveEffects.oneMagicWhenYouKillAMonster){
        this.$store.commit('addResource', {type: 'magic', value: 1})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pile{
    position: relative;
    width: 100%; 
    height: 175px; 
    border: 1px solid brown;
  }
  ul {
    list-style: none;
    font-size: 15px;
		margin: 0;
    padding: 0;
  }
  .about {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    bottom: 0px;
    position: absolute;
  }
  .status li button {
    border-radius: 20px !important;
    margin-top: 3px;
    margin-left: 3px;
  }
  .about .name {
    font-size: 20px;
  }
  .about .description {
    font-size: 12px;
  }
  .status {
    left: 0px;
    top: 0px;
    position: absolute;
  }
  .action {
    right: 5px;
    top: 75px;
    position: absolute;
  }
  .victory:disabled {
    color: white;
    background-color: purple;
    border-color: purple;
  }
</style>
