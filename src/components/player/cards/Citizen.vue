<template>
  <div 
    class="citizen"
    :style="{ 
      backgroundImage: 'url(' + image + ')', 
      backgroundSize: '240px 330px'
    }">

    <p class="name">{{card.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Citizen',
  props: {
    card: Object
  },
  data(){
    return {
      image: require(`../../../assets/images/Citizen/${this.card.id}.jpg`) ,
    }
  }
}
</script>

<style scoped>
	.citizen {
    width: 85%; 
    height: 175px; 
    border: 1px solid blue;
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
    top: 0px;
    right: 5px;
    position: absolute;
    font-size: 20px;
    position: absolute;
  }
</style>
