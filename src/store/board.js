export const board = {
  state: () => ({
    citizens: [],
    monsters: [],
    domains: []
  }),
  mutations: {
    addCitizenPileToBoard(state, pile) {
      state.citizens.push(pile);
      console.log(`Uma pilha de cidadãos foi adicionada ao board!`);
    },
    removeCitizenFromPile(state, pileId) {
      state.citizens.find(pile => pile.id === pileId).itens.shift();
      console.log(`Um cidadão foi retirado da pilha!`);
    },
    addCitizenToPile(state, citizen) {
      state.citizens.forEach(pile => {
        if(pile.id === citizen.id){
          pile.itens.unshift(citizen);
        }
      })

      console.log(`A carta ${citizen.name} foi adicionada a pilha de cidadãos!`);
    },
    addMonsterPileToBoard(state, pile) {
      state.monsters.push(pile);
      console.log(`Uma pilha de monstros foi adicionada ao board!`);
    },
    //Domain mutations
    addDomainPileToBoard(state, pile) {
      state.domains.push(pile);
      console.log(`Uma pilha de domínios foi adicionada ao board!`);
    },
    addMonsterToPile(state, monster) {
      state.monsters.forEach(pile => {
        if(pile.area === monster.area){
          pile.itens.unshift(monster);
        }
      })

      console.log(`A carta ${monster.name} foi adicionada a pilha de monstros!`);
    },
  }
}

export default board;