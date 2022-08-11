function mergeArrays (firstArr, secondArr) {

    let newArray = [];
    let inputL = firstArr.length;


    for (let index = 0; index < inputL; index++) {
        if (index % 2 === 0) {
            newArray[index] = Number(firstArr[index]) + Number(secondArr[index]);
        } else {
            newArray[index] = firstArr[index] + secondArr[index]
        }
    }

    console.log(newArray.join(' - '));

}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
);