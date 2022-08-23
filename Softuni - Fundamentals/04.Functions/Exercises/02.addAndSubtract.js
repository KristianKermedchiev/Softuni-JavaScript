function addAndSubtract (num1, num2, num3) {

    let sumFirstAndSecond = sum(num1, num2);
    
    console.log(subtract(sumFirstAndSecond, num3));

    function sum(num1, num2) {
        return num1 + num2;
    }

    function subtract(sumFirstAndSecond, num3) {
        return sumFirstAndSecond - num3;
    }

}
addAndSubtract(23,6, 10);
addAndSubtract(1,17, 30); 
addAndSubtract(42,58, 100);