function censoredWords (text, word){

    while(text.indexOf(word) >= 0){
        text = text.replace(word, '*'.repeat(word.length))
    }

    console.log(text);

}
censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');