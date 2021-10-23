function sumPrimes(num) {
    let primes = [2];
    for (let i = 3; i <= num; i++) {
      for (let j = 2; j <= i; j++) {
        if((i % j) === 0 && i !== j) break;
        if(i === j) {
          primes.push(i);
        }
      }
    }
    return primes.reduce((prev, curr) => prev + curr);
  }
  
  console.log(sumPrimes(10));
  console.log(sumPrimes(100));
  console.log(sumPrimes(977));