function mathPower(number, power){

    let currentNumber = 0;
    let finalNumber = number;
    
    for (let index = 1; index < power; index++) {
        currentNumber = number * finalNumber;
        finalNumber = currentNumber;
    }
    console.log(currentNumber)
}
mathPower(2,8);
mathPower(3,4);