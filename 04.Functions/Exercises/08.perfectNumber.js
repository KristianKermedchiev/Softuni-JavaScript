function perfectNumber (dividers) {
    let sumOfDividors = 1;

    for (let currentNumber = 2; currentNumber < dividers; currentNumber++) {
        if (dividers % currentNumber === 0) {
            sumOfDividors += currentNumber;
        }
    }

    let result = sumOfDividors === dividers ?
        'We have a perfect number!' : `It's not so perfect.`
        console.log(result);
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);