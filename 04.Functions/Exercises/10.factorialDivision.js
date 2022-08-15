function factorialDiv (num1, num2) {

    let x = num1;
    let finalX = x;
    let y = num2;
    let finalY = y;

    for (let index = x - 1; index >= 1; index--) {
        finalX = finalX * index;
    }
    
    for (let index = y - 1; index >= 1; index--) {
        finalY = finalY * index;
    }
    console.log((finalX/finalY).toFixed(2));
}
factorialDiv(5, 2);
factorialDiv(6, 2);