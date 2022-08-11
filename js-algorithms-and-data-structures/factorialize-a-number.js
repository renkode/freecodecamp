function factorialize(num) {
  const nums = Array.from({length: num}, (_, i) => i + 1); // otherwise start from 0
  return nums.reduce((prev, curr) => prev * curr, 1);
}

console.log(factorialize(5));