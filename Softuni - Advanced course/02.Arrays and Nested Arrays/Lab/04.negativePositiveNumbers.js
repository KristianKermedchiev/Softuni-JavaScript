function negativePositiveNumbers(input) {
  let result = [];
  for (let number of input) {
    if (number < 0) {
      result.unshift(number);
    } else {
      result.push(number);
    }
  }

  for (let number of result) {
    console.log(number);
  }
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);