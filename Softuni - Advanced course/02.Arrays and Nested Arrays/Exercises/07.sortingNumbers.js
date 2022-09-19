function sortingNumbers(input) {
    
    let result = [];
    let i = 0;

    while(input.length !== 0){
        if(i % 2 === 0){
            input.sort((a, b) => a - b);
            result.push(input[0]);
            input.shift();
        } else if (i % 2 !== 0){
            input.sort((a, b) => b - a);
            result.push(input[0]);
            input.shift();
        }
        i++
    }

    return result
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));