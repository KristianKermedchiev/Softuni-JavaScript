function sumFirstLast (input){

    let first = input.shift();
    let last = input.pop();
    return Number(first) + Number(last);
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['20', '30', '40']);