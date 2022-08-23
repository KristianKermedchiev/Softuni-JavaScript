function addAndSubtract(input) {

    let originalArraySum = 0;
    let newArraySum = 0;
    let inputL = input.length;

    for (let n = 0; n < inputL; n++) {

        originalArraySum += input[n];

        if (input[n] % 2 === 0) {
            input[n] += n;
        } else {
            input[n] -= n;
        }
        newArraySum += input[n];
    }

    console.log(input);
    console.log(originalArraySum);
    console.log(newArraySum)

}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
