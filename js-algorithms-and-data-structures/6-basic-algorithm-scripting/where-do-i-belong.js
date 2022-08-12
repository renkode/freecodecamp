// find which index the 2nd arg should fit into
function getIndexToIns(arr, num) {
  //push 2nd arg into arr, sort, then return index with indexOf
  let temp = [...arr, num].sort((a,b) => a - b);
  let index = temp.indexOf(num);
  return index;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));