function indexedCapitalization(str, arr){
  const strA = str.split(" ");

  for(let i = 0; i<arr.length; i++){
    // const index = arr[i];
    if(strA[arr[i]]){
      strA[arr[i]] = strA[arr[i]].toUpperCase(); 
    }
  }
  return strA.join(" ");
}
// console.log(indexedCapitalization("asd"));