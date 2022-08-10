function reverseInPlace (arr){

    let k = arr.length - 1;
    let output = '';
    for(let i = 0; i < arr.length / 2; i++){
        let temp = arr[i];
        arr[i] = arr[k - i]
        arr[k - i] = temp
        
    }
    console.log(arr.join(' '));

}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);