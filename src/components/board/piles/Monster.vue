<template>
  <div v-if="pile.itens.length > 0">
    <span>Force: {{this.$parent.getCardAtTheTop().force}}</span>&nbsp;
    <span v-if="this.$parent.getCardAtTheTop().magic">Magic: {{this.$parent.getCardAtTheTop().magic}}</span>&nbsp;
    <span>Victory Points: {{this.$parent.getCardAtTheTop().victoryPoints}}</span>&nbsp;
    <span>Area: {{this.$parent.getCardAtTheTop().area}}</span>&nbsp;
    <span>Type: {{this.$parent.getCardAtTheTop().type}}</span>&nbsp;
  </div>
</template>

<script>
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

</style>
