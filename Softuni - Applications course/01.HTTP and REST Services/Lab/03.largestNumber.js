function largestNumber(arg1, arg2, arg3) {
  let myArray = [arg1, arg2, arg3];

  let sorted = myArray.sort((a, b) => b - a);

  console.log(`The largest number is ${sorted[0]}.`);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);