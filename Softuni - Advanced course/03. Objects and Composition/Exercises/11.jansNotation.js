function jansNotation(arr) {

    let res = [];
    let number = [];
    let operators = [];

    let operationEnum = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    }

    for (let el of arr) {
        if (typeof (el) === 'number') {
            number.push(el);
        } else {
            operators.push(el);
        }
    }

    if (operators.length < number.length - 1) {
        console.log(`Error: too many operands!`);
        return;
    } else if (number.length === operators.length || number.length === 0) {
        console.log(`Error: not enough operands!`);
        return;
    }


    for (let el of arr) {
        if (typeof (el) === "number") {
            res.push(el);
            continue;
        }

        let numA = res.pop();
        let numB = res.pop();
        let result = operationEnum[el](numB, numA);
        res.push(result);

    }

    console.log(res.join());
}
jansNotation([3,
    4,
    '+']
);
jansNotation([5,
    3,
    4,
    '*',
    '-']
);
jansNotation([7,
    33,
    8,
    '-']
);
jansNotation([15,
    '/']
);