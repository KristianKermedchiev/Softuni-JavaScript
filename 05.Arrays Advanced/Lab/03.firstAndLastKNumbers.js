function firstAndLastKNumbers(array) {

    let k = array.shift();

    let firstNum = array.slice(0,k);
    let secondNum = array.slice(-k);

    console.log(firstNum.join(' '));
    console.log(secondNum.join(' '));
    
}
firstAndLastKNumbers([2, 
    7, 8, 9]
    )
firstAndLastKNumbers([3,
    6, 7, 8, 9]
   )