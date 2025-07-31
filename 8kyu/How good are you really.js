function betterThanAverage(classPoints, yourPoints) {
  //   // Your code here
  //   let sum = 0;

  //   for(let i =0; i<classPoints.length; i++){
  //     sum += classPoints[i];
  //   }
  //   let average = sum/(classPoints.length+1);
  //   let result =yourPoints >average? true:false ;
  //   return result;

  return (
    classPoints.reduce((acc, curr) => acc + curr) / classPoints.length <
    yourPoints
  );
}
