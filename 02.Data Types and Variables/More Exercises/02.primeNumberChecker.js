function primeNumberChecker (number) {

    let isPrime = true;
    if (number === 1) {
        console.log('false');
    } else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }
    }
    
    else {
        console.log(`false`);
    }

}
primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);