function sumOfOddNumbers (n){

    let counter = 0;
    let sum = 0;

    for (let index = 1; index < 100; index+=2) {
       console.log(index);
       counter++;
       sum+= index;
        
       if(counter == n){
           console.log(`Sum: ${sum}`)
           break;
       }
    }

}
sumOfOddNumbers(5);
sumOfOddNumbers(3);
