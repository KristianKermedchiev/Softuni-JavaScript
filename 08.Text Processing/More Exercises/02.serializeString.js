function serializeString (inputArray) {
    let string = inputArray[0];
    let letters = [];
 
    for (let i = 0; i < string.length; i++) {
        if (!letters.includes(string[i])) {
            letters.push(string[i]);
        }
    }
 
    while (letters.length > 0) {
        let char = letters.shift();
        let indices = [];
 
        for (let i = 0; i < string.length; i++) {
            if (char === string[i]) {
                indices.push(i);
            }
        }
 
        console.log(char + ':' + indices.join('/'));
    }
}
serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);