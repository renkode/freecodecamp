function sumPrimes(num) {
  let primes = [];
  if (num < 2) return;
  for (let potentialPrime = 2; potentialPrime <= num; potentialPrime++) {
    let isPrime = true;
    // iterate through all potential divisors, if can be divided, then not a prime
    for (let divisor = 2; divisor < potentialPrime; divisor++) {
      if (potentialPrime % divisor === 0) {
        isPrime = false;
      }
    }

    if (isPrime) primes.push(potentialPrime);
  }
  //return sum of all primes
  return primes.reduce((prev, cur) => prev + cur, 0);
}

console.log(sumPrimes(977));