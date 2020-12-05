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
    HaveEnoughResourcesToTheAction(monster){
      const haveForceEnough = this.$store.state.player.resources.force >= monster.force;
      const haveMagicEnough = monster.magic ? this.$store.state.player.resources.magic >= monster.magic : true;
      return haveForceEnough && haveMagicEnough;
    },
    subtractPlayerResources(monster){
      this.$store.commit('removeResource', {type: 'force', value: monster.force})
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
