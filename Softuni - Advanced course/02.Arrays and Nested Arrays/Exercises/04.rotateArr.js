function rotateArr (arr, count){

    for(let i = 0; i < count; i++){
        let temp = arr.pop();
        arr.unshift(temp);
    }
    console.log(arr.join(' '));
}
rotateArr(['1', 
'2', 
'3', 
'4'], 
2
);
rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);