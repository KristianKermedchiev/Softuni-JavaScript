function processOddNumbers(array) {

let filteredElements = array.filter((el,i) => i % 2 == 1);
let numbers = filteredElements.map(x=> x*2);
let finalResult = numbers.reverse();
console.log(finalResult.join(' '))
    
}
processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])


