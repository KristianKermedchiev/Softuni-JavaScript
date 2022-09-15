function biggerHalf (input){
    input.sort((a, b) => a - b);
    return input.slice(input.length / 2);
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));