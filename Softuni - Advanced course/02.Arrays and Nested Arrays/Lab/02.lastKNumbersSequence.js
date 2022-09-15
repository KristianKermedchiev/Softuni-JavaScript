function lastKNumbersSequence(n, k) {
  let myArray = [1];

  for (let current = 1; current < n; current++) {
    let start = Math.max(0, current - k);
    let end = current;
    let previousK = myArray.slice(start, end);
    let sum = 0;
    for (let i = 0; i < previousK.length; i++) {
      sum += previousK[i];
    }
    myArray[current] = sum;
  }

  return myArray;
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);