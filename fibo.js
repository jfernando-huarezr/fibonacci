function fibs(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return fibs(num - 1) + fibs(num - 2);
}

function arrayFibo(num) {
  const arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(fibs(i));
  }

  console.log(arr);
}

arrayFibo(7);
//this is not optimal, takes too long with bigger numbers

let memo = [];
function fibonacciMemo(n) {
  // if result stored previously
  // return
  if (n in memo) return memo[n];
  // base cases
  if (num === 0) return 0;
  if (num === 1) return 1;
  // recursion
  // store result in memo
  memo[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
  return memo[n];
}
