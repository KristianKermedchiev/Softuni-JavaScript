function sortingNumbers(input) {

    let half = input.length / 2

    let rightArray = input
        .sort((a, b) => a - b)
        .splice(half,)
        .reverse();

    let leftArray = input.sort((a, b) => a - b);

    let result = [];

    while (rightArray.length !== 0) {
        result.push(leftArray.shift());
        result.push(rightArray.shift());
    }

    return result
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));