function magicSums (array, number) {

    let arrOfValid = [];
    let validPair = '';

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] === number){
                validPair = `${array[i]} ${array[j]}`
                arrOfValid.push(validPair)
            }
            
        }
        
    }
    console.log(arrOfValid.join('\n'));
}
magicSums([1, 7, 6, 2, 19, 23], 8 );
magicSums([14, 20, 60, 13, 7, 19, 8], 27 );
magicSums([1, 2, 3, 4, 5, 6], 6 );