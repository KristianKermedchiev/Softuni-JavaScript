function countString (text, word){

    let array = text.split(' ');

    let sum = 0;

    for(let ele of array){

        if(ele === word){
            sum++;
        }
    }

    console.log(sum);

}
countString('This is a word and it also is a sentence',
'is'
);
countString('softuni is great place for learning new programming languages',
'softuni'
);