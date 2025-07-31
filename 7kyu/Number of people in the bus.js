var number = function (busStops) {
  // Good Luck!
  let total = 0;

  for (let i = 0; i < busStops.length; i++) {
    total += busStops[i][0];
    total -= busStops[i][1];
  }
  return total;
};
