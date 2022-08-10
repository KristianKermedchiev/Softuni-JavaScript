function magicMatrix(arr) {
    let sum = arr[0].reduce((a, b) => a + b, 0);
    let isMagic = true;

    for (let i = 0; i < arr.length; i++) {
        let sumRow = arr[i].reduce((a, b) => a + b, 0);
        let sumCol = arr.map(row => row[i]).reduce((a, b) => a + b, 0);

        // A matrix is magical if the sums of the cells of every row 
        // and every column are equal. 
        if (sumRow !== sum || sumCol !== sum) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);
}
magicMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
     
magicMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);

magicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);