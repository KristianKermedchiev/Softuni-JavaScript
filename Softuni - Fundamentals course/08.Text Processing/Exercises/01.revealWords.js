function revealWords (words, sentence) {

    let myMissingWord = words.split(', ');
    let myArray = sentence.split(' ');

    for (let element of myMissingWord) {
            for (let word of myArray) {
                if(word.includes('*') && word.length === element.length){
                    sentence = sentence.replace(word, element);
                }
            }
        
    }

    console.log(sentence);
}
revealWords('great',
'softuni is ***** place for learning new programming languages'
);
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);