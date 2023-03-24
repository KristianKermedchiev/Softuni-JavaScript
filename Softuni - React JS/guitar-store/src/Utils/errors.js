function errorParser (value){
    let parsedError = '';
    switch(value){
        case 'Firebase: Error (auth/wrong-password).': 
        parsedError = 'Incorrect Password';
            break;
        case 'Firebase: Error (auth/invalid-email).':
            parsedError = 'Invalid Email';
            break;
        case 'Firebase: Error (auth/email-already-in-use).':
            parsedError = 'Email is already taken';
            break;
        default: 
        parsedError = 'Something went wrong';
            break;
    }

    return parsedError;
}

export default errorParser;