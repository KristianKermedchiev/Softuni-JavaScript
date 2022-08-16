function lastKNumbersSequance(a, b) {

    let endResult = [1];

    for (let index = 0; index < a - 1; index++) {
        let sequenceK = endResult.slice(-b);
        let sum = 0;
        for (let el of sequenceK) {
            sum += el;
        }
        endResult.push(sum);
    }

    console.log(endResult.join(' '))

}
lastKNumbersSequance(6, 3)
lastKNumbersSequance(8, 2)