function simpleCalculator(a, b, operator) {

    let res;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch (operator) {
        case 'multiply': res = multiply(a, b); break;
        case 'divide': res = divide(a, b); break;
        case 'add': res = add(a, b); break;
        case 'subtract': res = subtract(a, b); break;
    }
    console.log(res)
}
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');