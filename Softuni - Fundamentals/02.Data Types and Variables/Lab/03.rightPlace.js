function rightPlace(string1, symbol, string2) {
    
    let result = string1.replace("_", symbol);

    if(result === string2){
        console.log('Matched');
    } else{
        console.log('Not Matched');
    }


}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');