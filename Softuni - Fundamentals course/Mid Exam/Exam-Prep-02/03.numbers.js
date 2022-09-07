function numbers(input) {

    let counter = 0;

    let myArray = input.split(' ');

    let sum = 0;

    for (let i = 0; i < myArray.length; i++) {
        let currentNum = Number(myArray[i])
        sum += currentNum
        counter++;
    }
    let average = sum / counter;

    let newArray = [];

    let biggestElement = 0;

    for (let j = 0; j < myArray.length; j++) {

        let curretElement = Number(myArray[j]);
        if(curretElement > biggestElement){
            biggestElement = myArray[j];
        }

    }

    if(average == biggestElement){
        console.log('No');
        return;
    }

    for (let index = 0; index < myArray.length; index++) {    

        if(myArray[index] > average){
            newArray.push(myArray[index]);

        }
        
    }

    let finalArray = newArray.sort((a,b) => b-a);

    if(finalArray.length > 5){
        finalArray.splice(5,Number.MAX_SAFE_INTEGER);
        console.log(finalArray.join(' '));
    } else {
        console.log(finalArray.join(' '));
    }
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');