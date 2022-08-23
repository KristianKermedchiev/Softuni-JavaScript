function janNotation (array) {
    let numbersArray = [];
    for (let i = 0; i < array.length; i++){
        if (Number(array[i])){
            numbersArray.push(Number(array[i]));
        }
        else {
            DoMath(numbersArray, array[i]);
        }
    }
   if (numbersArray.length >= 2){
        console.log('Error: too many operands!')
}
    else if (numbersArray.length === 1) {
        console.log(numbersArray.toString());
}
    function DoMath(numbers, operator) {
        if(numbers.length < 2) {
            console.log('Error: not enough operands!');
        }
        if (operator === '+'){
            numbers[numbers.length - 2] = numbers[numbers.length - 2] + numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        }
        else if (operator == '-'){
            numbers[numbers.length - 2] = numbers[numbers.length - 2] - numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        }
        else if (operator == '*'){
            numbers[numbers.length - 2] = numbers[numbers.length - 2] * numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        }
        else if (operator == '/'){
            numbers[numbers.length - 2] = numbers[numbers.length - 2] / numbers[numbers.length - 1];
            numbers.splice(- 1, 1);
        }
    }
}
janNotation([3,
    4,
    '+']
   );
janNotation([5,
    3,
    4,
    '*',
    '-']
   );
janNotation([7,
    33,
    8,
    '-']
   );
janNotation([15,
    '/']
   );