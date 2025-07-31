function invert(array) {
  if (array.length === 0) {
    return [];
  }

  let invertArr = [];

  for (let i = 0; i < array.length; i++) {
    invertArr.push(-array[i]);
  }

  return invertArr;
}
