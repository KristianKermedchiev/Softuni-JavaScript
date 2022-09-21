function calorieObject (input){

    let result = {};
    for(let i = 0; i< input.length; i++){
        if(i % 2 === 0){
            result[input[i]] = 0;
        } else {
            result[input[i-1]] = Number(input[i]);
        }
    }

    console.log(result)
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);