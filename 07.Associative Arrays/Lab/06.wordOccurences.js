function wordOccurence(input) {

    let myMap = new Map();
    let words = 0;

    for(let line of input){
        if(!myMap.has(line)){
            words = 1;
        } else {
            words = myMap.get(line) + 1;
        }
        myMap.set(line, words)
        
    }
    let sorted = Array.from(myMap);
    sorted.sort((a, b) => b[1] - a[1]);

    for(let [line, words] of sorted){
        console.log(`${line} -> ${words} times`);
    }
}
wordOccurence(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurence(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);