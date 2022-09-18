function magicMatrix(input) {


    for (let i = 0; i < input.length - 1; i++) {
        let sumRowOne = input[i].reduce((acc, el) => acc + el);
        let sumRowTwo = input[i + 1].reduce((acc, el) => acc + el);
        let sumColOne = 0;
        let sumColTwo = 0;
        for (let col = 0; col < input.length; col++) {
            sumColOne += input[i][col];
            sumColTwo += input[i + 1][col];
        }
        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            return false;
        }
    }
    return true;

}
console.log(magicMatrix([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));
console.log(magicMatrix([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
));
console.log(magicMatrix([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
));