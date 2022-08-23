function maxSeqOfEqualEle (array){

    let maxSequence = [];
    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {
        
        let currentSequence = [];
        for(let j = i; j < arrayL; j++){
            if(array[i] === array[j]){
            currentSequence.push(array[i]);
            } else {
                break;
            }
        }
        if(currentSequence.length > maxSequence.length){
            maxSequence = currentSequence;
        }
        
    }
    console.log(maxSequence.join(' '))
}
maxSeqOfEqualEle([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSeqOfEqualEle([1, 1, 1, 2, 3, 1, 3, 3]);
maxSeqOfEqualEle([4, 4, 4, 4]);
maxSeqOfEqualEle([0, 1, 1, 5, 2, 2, 6, 3, 3]);