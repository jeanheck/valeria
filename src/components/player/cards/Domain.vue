<template>
  <div>
    <p>
      <b-button 
        :disabled="true"
        class="victory"
        >
        <b-icon icon="trophy-fill" aria-hidden="true"></b-icon> {{card.victoryPoints}}
      </b-button>
    </p>

    <span class="name">{{card.name}}</span>
  </div>
</template>

<script>
export default {
  name: 'Domain',
  props: {
    card: Object
  }
}
</script>

<style scoped>
  .name {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    top: 40px;
    left: 5px;
    position: absolute;
    font-size: 15px;
    position: absolute;
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
