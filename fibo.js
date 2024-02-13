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
