function sumFibs(num) {
    let fibonacciArr = [];
    let b = 1
    let c = 1;
    for (let a = 0;;) {
      c = a + b;
      a = b;
      b = c
      if(c >= num) break;
      if(c < num) {
        fibonacciArr.push(c);
      }
    }
    let result = fibonacciArr.filter(num => num % 2 === 1).reduce((currentVal, previousVal) => currentVal + previousVal) + 1
    return result;
  }
   
  console.log(sumFibs(1));
  console.log(sumFibs(1000));
  console.log(sumFibs(4000000));
  console.log(sumFibs(4));
  console.log(sumFibs(75024));
  console.log(sumFibs(75025));