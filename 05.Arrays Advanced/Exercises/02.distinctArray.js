function distinctArray(array) {

    let arrayInOrder = [];

    for (let i = 0; i < array.length; i++) {
        let currentArray = array[i];

        if (!arrayInOrder.includes(currentArray)) {
            arrayInOrder.push(currentArray)
        }
    }

    console.log(arrayInOrder.join(' '));
}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);