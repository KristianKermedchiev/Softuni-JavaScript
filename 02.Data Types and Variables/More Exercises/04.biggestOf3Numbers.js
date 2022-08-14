function biggestOf3Numbers (num1, num2, num3){

    if(num1 > num2 && num1 > num3){
        console.log(num1)
    } else if (num2 > num1 && num2 > num3){
        console.log(num2)
    } else{
        console.log(num3)
    }
}
biggestOf3Numbers(-2,7,3);
biggestOf3Numbers(130,5,99);
biggestOf3Numbers(43,43.2,43.1);
biggestOf3Numbers(2,2,2);