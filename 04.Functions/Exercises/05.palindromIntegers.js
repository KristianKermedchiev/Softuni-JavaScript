function palindromeInt (input){

    for (let el of input) {
        let curent = String(el);
        let reversed = String(el).split('').reverse().join('');

        if(curent === reversed){
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
