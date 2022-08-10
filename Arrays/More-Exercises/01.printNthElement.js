function printNthEle (array){

    let n = array.pop()
    let newArray = []

    for (let i = 0; i <= array.length; i++) {
        if (i % n == 0) {
            newArray.push(array[i])
        }
    }
    console.log(newArray.join(' '));
}
printNthEle(['5', '20', '31', '4', '20', '2']);
printNthEle(['dsa', 'asd', 'test', 'test', '2']);
printNthEle(['1', '2', '3', '4', '5', '6']);