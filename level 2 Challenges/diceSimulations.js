function diceSimulations(a) {
  let simulations = [];
  while (a-- != 0) {
    let simulation = {};
    simulation['dice1'] = Math.floor(Math.random() * 6) + 1;
    simulation['dice2'] = Math.floor(Math.random() * 6) + 1;
    let sum = simulation['dice1'] + simulation['dice2'];
    let result;
    if (sum == 7 || sum == 11) {
      result = 'win';
    } else if (sum == 12 || sum == 2 || sum == 3) {
      result = 'lose';
    } else {
      result = 'roll again';
    }
    simulation['result'] = result;
    simulations.push(simulation);
  }
  return simulations;
}
console.log(diceSimulations(10));
