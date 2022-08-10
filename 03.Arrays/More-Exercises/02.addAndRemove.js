function addAndRemove (array){

    let currentNumber = 0
    let newArray = [];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentIndex = array[i];
        if(currentIndex === 'add'){
            currentNumber++
            sum+=currentNumber;
            newArray.push(currentNumber)
        } else {
            currentNumber++
            sum-=currentNumber;
            newArray.pop(currentNumber)
        }
    }
    
    if(newArray.length == 0){
        console.log(`Empty`);
    } else {
        console.log(newArray.join(' '));
    }
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);