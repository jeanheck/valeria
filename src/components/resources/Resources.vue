<template>
  <div>
    <h1>Resources</h1>

    <Victory />
    <Force />
    <Magic />
    <Gold />
  </div>
</template>

<script>
import Force from './Force'
import Magic from './Magic'
import Gold from './Gold'
import Victory from './Victory'

export default {
  name: 'Resources',
  components: {
    Gold, Force, Magic, Victory
  },
  methods: {
    setInitialResources(){
      this.$store.commit('addResource', {type: 'gold', value: 300})
      this.$store.commit('addResource', {type: 'magic', value: 300})

      this.$store.commit('addResource', {type: 'force', value: 300})
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