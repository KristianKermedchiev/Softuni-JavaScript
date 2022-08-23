function asciiSumator (input) {

    let firstChar = input[0].charCodeAt();
    let secondChar = input[1].charCodeAt();

    let sum = 0;

    if (firstChar < secondChar) {
        for (let el of input[2]) {
            if (el.charCodeAt() > firstChar && el.charCodeAt() < secondChar) {
                sum += el.charCodeAt();
            }
        }

    } else {

        for (let el of input[2]) {
            if (el.charCodeAt() > secondChar && el.charCodeAt() < firstChar) {
                sum += el.charCodeAt();
            }
        }

    }

    console.log(sum);

}
asciiSumator(['.',
'@',
'dsg12gr5653feee5']
);
asciiSumator(['?',
'E',
'@ABCEF']
);
asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']
);