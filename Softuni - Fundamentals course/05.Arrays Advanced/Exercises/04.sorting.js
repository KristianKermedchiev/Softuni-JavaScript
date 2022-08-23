function sorting (input){

    let array = input.map(Number).sort(function(a,b){
        return a-b;
    });

    let arrayCopy = array.slice();
    let finalArray = [];

   

    for(let i = 0; i < array.length; i++){
        finalArray.push(arrayCopy[arrayCopy.length - 1]);
        if (finalArray.length === array.length){
            break;
        }
        finalArray.push(arrayCopy[0]);

        if(finalArray.length === array.length){
            break;
        }
        arrayCopy.shift();

        arrayCopy.pop();

    }
    

    console.log(finalArray.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])