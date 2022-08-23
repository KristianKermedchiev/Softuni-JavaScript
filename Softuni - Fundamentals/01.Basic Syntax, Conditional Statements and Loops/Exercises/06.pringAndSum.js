function printAndSum(num1, num2) {

    let sum = 0;
    let printLine = '';

    for (let index = num1; index <= num2; index++) {
        sum += index

        if (index == num2) {
            printLine += `${index}`
        } else {
            printLine += `${index} `
        }
    }
    console.log(printLine)
    console.log(`Sum: ${sum}`)
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);