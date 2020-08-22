<template>
  <div>
    <h1>Resources</h1>

    <Force />
    <Magic />
    <Gold />
  </div>
</template>

<script>
import Force from './Force'
import Magic from './Magic'
import Gold from './Gold'

export default {
  name: 'Resources',
  components: {
    Gold, Force, Magic
  },
  methods: {
    setInitialResources(){
      this.$store.commit('addResource', {type: 'gold', value: 2})
      this.$store.commit('addResource', {type: 'magic', value: 1})
    }
  },
  mounted(){
    this.setInitialResources();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>