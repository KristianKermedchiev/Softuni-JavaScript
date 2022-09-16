function extract(input) {

    let result = [];
    let temp = input[0];
    for (let el of input) {
        if (el >= temp) {
            result.push(el);
            temp = el;
        }
    }
    return result;

}
console.log(extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
console.log(extract([1,
    2,
    3,
    4]
));
console.log(extract([20,
    3,
    2,
    15,
    6,
    1]
));