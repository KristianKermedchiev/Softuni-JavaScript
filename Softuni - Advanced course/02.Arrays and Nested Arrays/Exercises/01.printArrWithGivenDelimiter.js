function printArrWithDelimiter(arr, string) {

    console.log(arr.join(string));
}
printArrWithDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);
printArrWithDelimiter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_'
);