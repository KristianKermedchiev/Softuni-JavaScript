function echoType(input) {
    let type = typeof(input);

    if (type == 'number' || type == 'string') {
        console.log(type);
        console.log(input);
    } else {
        console.log(type);
        console.log('Parameter is not suitable for printing');
    }
}
echoType('Hello, JavaScript!');
echoType(18);
echoType(null);