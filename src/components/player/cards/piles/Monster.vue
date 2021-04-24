<template>
  <div>
    <p>
      <b-button 
        :disabled="true"
        class="victory"
        >
        <b-icon icon="trophy-fill" aria-hidden="true"></b-icon> {{card.victoryPoints}}
      </b-button>

      <span class="name">{{card.name}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Monster',
  props: {
    card: Object
  }
}
</script>

<style scoped>
  .name {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    top: 5px;
    left: 70px;
    position: absolute;
    font-size: 20px;
  }
  .victory:disabled {
    color: white;
    background-color: purple;
    border-color: purple;
    border-radius: 20px !important;
    margin-top: 3px;
    margin-left: 3px;
  }
</style>
