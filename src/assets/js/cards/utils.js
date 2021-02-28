//citizens
export function getCitizenTypeCount(store, type){
  return store.state.player.buyedCitizens.filter(card => card.type === type).length;
}
//monsters
export function getMonsterAreaCount(store, area){
  return store.state.player.killedMonsters.filter(monster => monster.area === area).length;
}
//dukes
export function getVictoryPointsByCoins(store, divider){
  return Math.floor((store.state.player.resources.gold + store.state.player.resources.magic + store.state.player.resources.force) / divider);
}
export function getTotalPoints(points){
  return points.reduce((partial_sum, a) => partial_sum + a, 0); 
}
export function addVictoryPoints(store, points){
  store.commit('addResource', {type: 'victory', value: getTotalPoints(points)})
}
//domains
export function getbuyedCitizensCount(store){
  return store.state.player.buyedCitizens.length;
}
export function getCitizensInBoardIDByType(store, type){
  return store.state.board.citizens.filter(citizen => citizen.type === type).map(pile => {return pile.id});
}
export function getPointsByDomain(store, types){
  let points = [];

  console.log('types > ', types)

  types.forEach(type => {
    console.log('type > ', type);
    console.log('store.state.player.buildedDomains > ', store.state.player.buildedDomains);

    store.state.player.buildedDomains.forEach(domain => {
      console.log('domain.requirements > ', domain.requirements);

      let pontos = domain.requirements.filter(requirement => requirement === type.name).length * type.value;

      console.log('pontos > ', pontos);

      points.push(pontos);
    })        
  })

  console.log('points > ', points)

  return getTotalPoints(points);
}