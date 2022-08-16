function sumFirstAndLast(array) {
    
    let x = Number(array.shift());
    let y = Number(array.pop());

    console.log(x+y)
}
sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])