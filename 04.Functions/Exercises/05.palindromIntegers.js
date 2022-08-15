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
palindromeInt([123,323,421,121]);
palindromeInt([32,2,232,1010]);