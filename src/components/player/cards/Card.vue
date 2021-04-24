<template>
  <div :class="`pile ${type}`">
    <span class="quantity">{{card.quantity}}</span>

    <div 
      :class="`card ${type}`"
      :style="{ 
        backgroundImage: 'url(' + image + ')', 
        backgroundSize: backgroundData[type].backgroundSize
      }">

      <Card :is="type" :card="card" ref="card" />
    </div>
  </div>
</template>

<script>
import Citizen from './Citizen'
import Monster from './Monster'
import Domain from './Domain'

export default {
  name: 'Card',
  components: {
    Citizen, Monster, Domain
  },
  props: {
    card: Object,
    type: String
  },
  data(){
    return {
      backgroundData: {
        Citizen: {
          backgroundSize: '240px 330px'
        },
        Domain: {
          backgroundSize: '210px 270px'
        },
        Monster: {
          backgroundSize: '210px 250px'
        }
      },
      image: require(`../../../assets/images/${this.type}/${this.card.id}.jpg`) ,
    }
  }
}
</script>

<style scoped>
  .card {
    width: 85%; 
    height: 175px; 
    float: right;
    position: relative;
    margin-left: 5px;
    margin-right: 5px;
  }
	.card.Citizen {
    border: 1px solid blue;
    margin-bottom: -110px;
  }
  .card.Domain {
    border: 1px solid green;
    margin-bottom: -110px;
  }
  .card.Monster {
    border: 1px solid brown;
    margin-bottom: -100px;
  }
  .pile {
    height: 175px; 
  }
  .pile.Citizen {
    margin-bottom: -110px;
  }
  .pile.Monster {
    margin-bottom: -100px;
  }
  .pile.Domain {
    margin-bottom: -110px;
  }
  .quantity {
    font-size: 35px;
    font-weight: 900;
    margin-left: 5px;
    font-style: italic;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  }
</style>
