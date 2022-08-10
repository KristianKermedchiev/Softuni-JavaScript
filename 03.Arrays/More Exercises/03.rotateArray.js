function rotateArray(array){

    let k = array.pop();

    for (let i = 0; i < k; i++) {
        let currentElement = array.pop();
        array.unshift(currentElement);
    }
    console.log(array.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);