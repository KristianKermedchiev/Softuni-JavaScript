function reverseString(input){

    let myArray = [];

    for (let i = 0; i < input.length; i++) {
        myArray.push(input[i]);
    }

    console.log(myArray.reverse().join(''));
}
reverseString('Hello');
reverseString('SoftUni');
reverseString('1234');
