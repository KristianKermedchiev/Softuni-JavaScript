function condenseArrToNum (numbers) {

    let result = [];

    for (let el of numbers) {
        result.push(el)
    }

    while (result.length > 1) {
        let tempArr = [];
        for (let i = 0; i < result.length - 1; i++) {
            tempArr[i] = result[i] + result[i + 1];
        }
        result = tempArr;
    }

    console.log(result.toString())

}
condenseArrToNum([2,10,3]);
condenseArrToNum([5,0,4,1,2]);
condenseArrToNum([1]);