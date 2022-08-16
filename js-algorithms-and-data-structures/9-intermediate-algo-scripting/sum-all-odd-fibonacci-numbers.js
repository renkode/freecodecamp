// Every additional number in the sequence is the sum of the two previous numbers. 
// sum all ODD fibo numbers <= num
function sumFibs(num) {
  let fibonacci = [1,1]; // e.g. 1, 1, 2, 3, 5, 8
  let count = 2;
  while (fibonacci[count-2] + fibonacci[count-1] <= num) {
    fibonacci.push(fibonacci[count-2] + fibonacci[count-1]);
    count++;
  }
  let odd = fibonacci.filter(num => num % 2 === 1);
  return odd.reduce((prev,cur) => prev + cur, 0);
}

console.log(sumFibs(75025)); // 5