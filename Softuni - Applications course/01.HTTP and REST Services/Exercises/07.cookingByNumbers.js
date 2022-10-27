function cookingByNumbers(number, arg1, arg2, arg3, arg4, arg5) {
  let startingNumber = Number(number);

  let myArray = [arg1, arg2, arg3, arg4, arg5];

  while (myArray.length !== 0) {
    let command = myArray.shift();
    if (command === "chop") {
      startingNumber /= 2;
      console.log(startingNumber);
    } else if (command === "dice") {
      startingNumber = Math.sqrt(startingNumber);
      console.log(startingNumber);
    } else if (command === "spice") {
      startingNumber += 1;
      console.log(startingNumber);
    } else if (command === "bake") {
      startingNumber *= 3;
      console.log(startingNumber);
    } else if (command === "fillet") {
      startingNumber = startingNumber * 0.8;
      console.log(startingNumber.toFixed(1));
    }
  }
}
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");