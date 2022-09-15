function diagonalSums (input){
    let mainIndex = 0;
    let secondaryIndex = input[0].length - 1;

    let mainSum = 0;
    let secondarySum = 0;

    for(let row = 0; row < input.length; row++){
        mainSum += input[row][mainIndex];
        secondarySum += input[row][secondaryIndex];

        mainIndex++;
        secondaryIndex--;
    }

    return mainSum + ' ' + secondarySum;
}
console.log(diagonalSums([[20, 40],
    [10, 60]]
));
console.log(diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
));