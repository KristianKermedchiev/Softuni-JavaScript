function printhNthEleFromArr(arr, step) {

    let result = [];

    for(let i = 0; i < arr.length; i+=step){
        result.push(arr[i]);
    }

    return result

}
console.log(printhNthEleFromArr(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));
console.log(printhNthEleFromArr(['dsa',
    'asd',
    'test',
    'tset'],
    2

));
console.log(printhNthEleFromArr(['1',
    '2',
    '3',
    '4',
    '5'],
    6
));