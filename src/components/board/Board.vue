<template>
  <div id="board">
    <h1>Board</h1>

    <Citizens />
  </div>
</template>

<script>
import Citizens from './Citizens'

export default {
  name: 'Board',
  components: {
    Citizens
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #board {
		border: 1px solid black;
		width: 60%;
    height: 100%;
		float: left;
	}
</style>