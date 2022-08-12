function sumDigits (num){

    let pepsi = num.toString()
    let sum = 0;        

    for(let i = 0; i < pepsi.length; i++){
        let johny = Number(pepsi[i]);
        sum+=johny;
    }
    console.log(sum)
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);