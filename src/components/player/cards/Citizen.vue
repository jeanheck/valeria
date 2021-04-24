<template>
  <div>
    <p class="name">{{card.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Citizen',
  props: {
    card: Object
  }
}
</script>

<style scoped>
  .name {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    top: 0px;
    right: 5px;
    position: absolute;
    font-size: 20px;
    position: absolute;
  }
</style>
