function calculator(n1, op, n2) {
    let res = 0;
    switch (op) {
        case '+':
            res = n1 + n2;
            break;
        case '-':
            res = n1 - n2;
            break;
        case '*':
            res = n1 * n2;
            break;
        case '/':
            res = n1 / n2;
            break;
    }
    console.log(res.toFixed(2))
}
calculator(5,'+',10);
calculator(25.5,'-',3);