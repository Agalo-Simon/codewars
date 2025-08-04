
function howMuchILoveYou(nbPetals) {
  // your code
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  while (nbPetals > 6) {
    nbPetals -= 6;
  }
  return phrases[nbPetals - 1];
}