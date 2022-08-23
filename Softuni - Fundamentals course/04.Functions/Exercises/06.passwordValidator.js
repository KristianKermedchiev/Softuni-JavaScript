function passwordValidator(password) {

    let trueCounter = 0;

    let check1 = validateQuantityOfElements(password);
    let check2 = validateOnlyLettersAndDigit(password);
    let check3 = atLeast2Digit(password);

    if(trueCounter === 3){
        console.log(`Password is valid`);
    }

    function validateQuantityOfElements(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            trueCounter++;
        } else {
            trueCounter--;
            console.log("Password must be between 6 and 10 characters");
        }
    }

    function validateOnlyLettersAndDigit(pass) {
        let isValid = pass.split('').filter((char) => /[^a-zA-Z0-9]/.test(char));
        if (isValid.length === 0) {
            trueCounter++;
        } else {
            trueCounter--;
            console.log('Password must consist only of letters and digits');
        }
    }

    function atLeast2Digit(pass) {
        let isValid = pass.split('').filter((char) => /[^!-/:-@[-`{-~a-zA-Z]/.test(char));
        if (isValid.length >= 2) {
            trueCounter++;
        } else {
            trueCounter--;
            console.log('Password must have at least 2 digits');
        }
    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');