function arrayModifier (input){

    let myArray = input.shift().split(' ');
    let index = 0;
    let commdand = input[index++];

    while(commdand !== 'end'){
        let currentCommand = commdand.split(' ');
        let action = currentCommand[0];
        let index1 = currentCommand[1];
        let index2 = currentCommand[2];
        switch (action) {
            case 'swap':
                let temp = myArray[index1];
                myArray[index1] = myArray[index2];
                myArray[index2] = temp;
                break;
            case 'multiply':
            myArray[index1] = Number(myArray[index1]) * Number(myArray[index2]);
                break;
            case 'decrease':

            for (let i = 0; i < myArray.length; i++) {
                myArray[i] = myArray[i] - 1;           
            }
                break;
        }
        commdand = input[index++];
    }

    console.log(myArray.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);
