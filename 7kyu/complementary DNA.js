function DNAStrand(dna) {
  let complementaryDNA = "";
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        complementaryDNA += "T";
        break;
      case "T":
        complementaryDNA += "A";
        break;
      case "C":
        complementaryDNA += "G";
        break;
      case "G":
        complementaryDNA += "C";
        break;
    }
  }
  return complementaryDNA;
}
