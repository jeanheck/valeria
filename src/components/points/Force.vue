<template>
  <div>
    <h1>Force points</h1>
    <p>
      {{ forcePoints }}
    </p>
    <button v-on:click="plus">Plus</button>
    <button v-on:click="sub">Sub</button>
  </div>
</template>

<script>
export default {
  name: 'Force',
  data () {
    return {
      forcePoints: 0
    }
  },
  methods: {
    plus() {
      this.forcePoints++;
    },
    sub() {
      this.forcePoints--;
    }
  },
  mounted() {
    this.$parent.$on('add-force-points', points => {
      this.forcePoints += points;
      console.log(`O player ganhou ${points} force(s) adicional!`);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>