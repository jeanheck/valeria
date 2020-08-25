<template>
  <div id="board">
    <h1>Board</h1>

    <Citizens />
    <Monsters />
  </div>
</template>

<script>
import Citizens from './Citizens'
import Monsters from './Monsters'

export default {
  name: 'Board',
  components: {
    Citizens, Monsters
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