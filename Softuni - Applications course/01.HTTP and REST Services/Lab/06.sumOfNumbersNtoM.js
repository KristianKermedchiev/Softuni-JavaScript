function sumOfNumbers(num1, num2) {
  let number1 = Number(num1);
  let number2 = Number(num2);
  let result = 0;
  for (let i = number1; i <= number2; i++) {
    result += i;
  }

  return result;
}
sumOfNumbers("1", "5");
sumOfNumbers("-8", "20");