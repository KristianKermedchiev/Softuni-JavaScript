function matchPhoneNumber(input) {

    let pattern = /\+359([ |-])2\1[0-9]{3}\1[0-9]{4}/g
    let phoneNumbersList = input[0];

    let result = [];
    let match = pattern.exec(phoneNumbersList)
    while (match !== null) {
        result.push(match[0]);

        match = pattern.exec(phoneNumbersList)
    }

    console.log(result.join(', '));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
matchPhoneNumber(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222']);