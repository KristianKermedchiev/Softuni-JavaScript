function sortNumbers(a,b,c){

    let myArray = [];
    myArray.push(a)
    myArray.push(b)
    myArray.push(c)

    myArray.sort((a,b) => b-a)
    console.log(myArray.join('\n'));

}
sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);