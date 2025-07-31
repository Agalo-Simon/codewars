function areaOrPerimeter(l, w) {
  // Return your answer
  const isSquare = l === w;

  if (isSquare) {
    return l * w;
  } else {
    return l * 2 + w * 2;
  }
}
