function sumAll(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let range = [];
  for (let i = min; i <= max; i++) {
    range.push(i);
  }
  return range.reduce((prev,current) => prev + current, 0);
}

console.log(sumAll([1, 4]));