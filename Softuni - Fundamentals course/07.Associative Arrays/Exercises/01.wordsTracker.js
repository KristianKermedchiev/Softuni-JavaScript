function wordsTracker (input){

    let myMap = new Map();
    let sentence = input.shift().split(' ');
   
    for(let word of sentence){
        myMap.set(word, 0);
    }
    for(let word of input){
        if(myMap.has(word)){
            let oldValue = myMap.get(word);
            myMap.set(word, oldValue+1);
        }
    }

    let soted = Array.from(myMap.entries()).sort(([keyA, valueA], [keyB, valueB])=> {
        return valueB - valueA;
    })

    for(let [key, value] of soted){
        console.log(`${key} - ${value}`);
    }
}
wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
);
wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);