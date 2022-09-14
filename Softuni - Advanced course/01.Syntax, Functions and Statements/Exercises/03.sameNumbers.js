function sameNumbers(number) {
  let numToString = number.toString();
  let firstDigit = numToString[0];
  let bool = true;
  let result = 0;

  for (let i = 0; i < numToString.length; i++) {
    if (numToString[i] !== firstDigit) {
      bool = false;
    }
    result += Number(numToString[i]);
  }

  console.log(bool);
  console.log(result);
}
sameNumbers(2222222);
sameNumbers(1234);