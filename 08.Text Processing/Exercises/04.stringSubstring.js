function stringSubstring (word, text){

    let myText = text.toLowerCase();
    let myArray = myText.split(' ');

    for(let el of myArray){

        if(el === word){
            console.log(word);
            return;
        } 
    }

    console.log(`${word} not found!`);
    
}
stringSubstring('javascript',
'JavaScript is the best programming language'
);
stringSubstring('python',
'JavaScript is the best programming language'
);