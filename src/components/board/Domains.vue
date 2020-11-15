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
      const domains = [
        [
          cards.domains.AQUA_OBSERVER,
          cards.domains.BLOOD_CROW_ARMY,
          cards.domains.ASTERATEN_EYE,
          cards.domains.ST_AQUILA_CHURCH,
          cards.domains.COLISEUM,
          cards.domains.CLOUDRIDER_CAMPING,
          cards.domains.TRUCE_CUT_THROAT
        ],
        [
          cards.domains.DESERT_ORCHID,
          cards.domains.DAWN_PALACE,
          cards.domains.FOX_GROVE_PALACE,
          cards.domains.FORGOTTEN_SORROWS,
          cards.domains.EMERALD_FORTRESS,
          cards.domains.ULLAMALIZATLI_COURT,
          cards.domains.ASTERATEN_EYE
        ],
        [
          cards.domains.VIOLET_THORN,
          cards.domains.SHATTERED_HAND,
          cards.domains.GRIMMWATER_FORT,
          cards.domains.GARGAN_HUGHE,
          cards.domains.JUSTA_FIELD,
          cards.domains.NAE_GOLDEN_OBELISK,
          cards.domains.HALFPENNNY_HILL,
        ],
        [
          cards.domains.PLATEAU_PRATCHETT,
          cards.domains.PURLOINER_PERCH,
          cards.domains.WEAVING_WITCHS_NEST,
          cards.domains.THE_TOWER,
          cards.domains.ROGUES_LANDING,
          cards.domains.OSTENDAR_MONOLITH,
          cards.domains.THE_URDR_ORB
        ],
      ];

      this.addDomainsToBoard(domains);
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
