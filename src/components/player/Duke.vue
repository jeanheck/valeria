<template>
  <div>
    <div class="duke-image">
      <img :src="require('../../assets/images/Duke/' + this.$store.state.player.duke.id + '.jpeg')">
    </div>
    <div class="duke-info">
      <p class="name">
        {{this.$store.state.player.duke.name}}
      </p>
      <p class="reward-description">
        {{this.$store.state.player.duke.rewardDescription}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Duke',
  components: {

  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
  .duke-image {
    width: 90%; 
    height: 220px;
    margin: 10px; 
  }
  img {
    width: 170px; 
    height: 220px;
    border-radius: 5px;
  }
  .duke-info {
    width: 90%; 
    height: 180px;
    margin: 10px; 
    border: 1px solid purple;
    border-radius: 5px;
    color: black;
  }
  .duke-info .name {
    font-size: 18px;
  }
  .duke-info .reward-description {
    font-size: 12px;
  }
</style>