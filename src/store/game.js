export const game = {
  state: () => ({
    phase: 'NOT_INITIATED',
    diceOne: '',
    diceTwo: '',
    sumDices: '',
    actionsCounter: 0,
    passiveEffects: {
      cancelAdditionalValueToBuy: false,
      domainsCostOneGoldLess: false,
      oneMagicWhenYouKillAMonster: false,
      oneMagicWhenYouBuyACitizen: false
    }
  }),
  mutations: {
    cancelAdditionalValueToBuy(state){
      state.passiveEffects.cancelAdditionalValueToBuy = true;
      console.log(`Efeito Ativado! Cidadãos não tem mais custo adicional!`);
    },
    domainsCostOneGoldLess(state){
      state.passiveEffects.domainsCostOneGoldLess = true;
      console.log(`Efeito Ativado! Domínios custam -1 de ouro!`);
    },
    oneMagicWhenYouKillAMonster(state){
      state.passiveEffects.oneMagicWhenYouKillAMonster = true;
      console.log(`Efeito Ativado! + 1 de mágica sempre que matar um monstro!`);
    },
    oneMagicWhenYouBuyACitizen(state){
      state.passiveEffects.oneMagicWhenYouBuyACitizen = true;
      console.log(`Efeito Ativado! + 1 de mágica sempre que comprar um cidadão!`);
    },
  }
}

export default game;