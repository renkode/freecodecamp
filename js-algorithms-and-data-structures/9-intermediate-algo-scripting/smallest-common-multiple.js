// if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  let range = Array.from({length: Math.max(...arr) - Math.min(...arr) + 1}, (_,index) => index + Math.min(...arr));
  let common = 1;
  while (true) {
    if (range.every(num => common % num === 0)) {
      break;
    } else {
      common++;
    }
  }
  return common;
}

console.log(smallestCommons([1,5])); // 60