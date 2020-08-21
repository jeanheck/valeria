<template>
  <div>
    <h1>Magic points</h1>
    <p>
      {{ magicPoints }}
    </p>
    <button v-on:click="plus">Plus</button>
    <button v-on:click="sub">Sub</button>
  </div>
</template>

<script>
export default {
  name: 'Magic',
  data () {
    return {
      magicPoints: 0
    }
  },
  methods: {
    plus() {
      this.magicPoints++;
    },
    sub() {
      this.magicPoints--;
    }
  },
  mounted() {
    this.$parent.$on('add-magic-points', points => {
      this.magicPoints += points;
      console.log(`O player ganhou ${points} magic(s) adicional!`);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>