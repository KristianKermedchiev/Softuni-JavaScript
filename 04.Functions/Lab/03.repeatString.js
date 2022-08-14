function repeatString (string, repeatCount){

    let empty = ' ';
    
    for (let index = 1; index <= repeatCount; index++) {     
        empty+=string
    }  
    console.log(empty)    
}
repeatString("abc", 3);
repeatString("String", 2);