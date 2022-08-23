function negativeOrPositiveNumbers (array) {
    
    let endResult = [];

    for (let el of array) {
        if(el < 0){
           endResult.unshift(el);
        } else {
            endResult.push(el);
        }
    }

    console.log(endResult.join('\n'))
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])