<template>
  <div>
    <h1>Gold points</h1>
    <p>
      {{ goldPoints }}
    </p>
    <button v-on:click="plus">Plus</button>
    <button v-on:click="sub">Sub</button>
  </div>
</template>

<script>
export default {
  name: 'Gold',
  data () {
    return {
      goldPoints: 0
    }
  },
  methods: {
    plus() {
      this.goldPoints++;
    },
    sub() {
      this.goldPoints--;
    }
  },
  mounted() {
    this.$parent.$on('add-gold-points', points => {
      this.goldPoints += points;
      console.log(`O player ganhou ${points} gold(s) adicional!`);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>