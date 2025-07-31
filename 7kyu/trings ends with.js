function solution(str, ending) {
  // TODO: complete
  return str.indexOf(ending, str.length - ending.length) !== -1;
}
