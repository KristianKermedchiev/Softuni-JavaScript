function processOldPositions (input){

    return input
        .filter((n, i) => i % 2 !== 0)
        .map(n => n * 2)
        .reverse()
        .join(' ')

}
console.log(processOldPositions([10, 15, 20, 25]));
console.log(processOldPositions([3, 0, 10, 4, 7, 3]));