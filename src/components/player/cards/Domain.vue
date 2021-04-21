<template>
  <div 
    class="domain"
    :style="{ 
      backgroundImage: 'url(' + image + ')', 
      backgroundSize: '210px 270px'
    }">

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
  },
  data(){
    return {
      image: require(`../../../assets/images/Domain/${this.card.id}.jpg`) ,
    }
  }
}
</script>

<style scoped>
	.domain {
    width: 85%; 
    height: 175px; 
    border: 1px solid green;
    float: right;
    position: relative;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: -110px;
  }
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
