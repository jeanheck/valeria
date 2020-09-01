<template>
  <div id="domains">
    <h1>Domains</h1>

    <DomainPile v-for="pile in this.$store.state.board.domains" :key="pile.id" :pile="pile" />
  </div>
</template>

<script>
import * as cards from '../../assets/js/cards.js'

import DomainPile from './piles/DomainPile'

export default {
  name: 'Domains',
  components: {
    DomainPile
  },
  methods: {
    addDomainsToBoard(domainsPiles){
      domainsPiles.forEach((pile) => {
        this.$store.commit('addDomainPileToBoard', pile);
      })
    },
    setInitialPiles(){
      const ruins_monsters = [
        cards.monsters.SKELETON,
        cards.monsters.SKELETON,
        cards.monsters.SKELETON,
        cards.monsters.FLAMING_SKELETON,
        cards.monsters.SKELETON_KING,
      ];
      const mountain_monsters = [ 
        cards.monsters.HORRENDOUS_BEAR,
        cards.monsters.HORRENDOUS_BEAR,
        cards.monsters.ORC_WARRIOR,
        cards.monsters.ORC_WARRIOR,
        cards.monsters.ORC_BOSS,
      ];
      const forest_monsters = [ 
        cards.monsters.TREANT,
        cards.monsters.TREANT,
        cards.monsters.CURSED_SPIDER,
        cards.monsters.CURSED_SPIDER,
        cards.monsters.SPIDER_QUEEN,
      ];
      const valley_monsters = [ 
        cards.monsters.BEAR_OWL,
        cards.monsters.BEAR_OWL,
        cards.monsters.BEAR_OWL,
        cards.monsters.GIANT,
        cards.monsters.TROLL,
      ];
      const hills_monsters = [ 
        cards.monsters.GOBLIN,
        cards.monsters.GOBLIN,
        cards.monsters.GOBLIN,
        cards.monsters.MAGE_GOBLIN,
        cards.monsters.GOBLIN_KING,
      ];

      this.addDomainsToBoard([ruins_monsters, mountain_monsters, forest_monsters, valley_monsters, hills_monsters]);
    }
  },
  mounted(){
    console.log('cards > ', cards)
    this.setInitialPiles();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #domains {
		border: 1px solid green;
    float: left;
		height: 50%;
    width: 30%;
	}
</style>
