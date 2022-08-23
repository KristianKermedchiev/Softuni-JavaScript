function cutAndReverse (input){

    let reverse = input.split('').reverse().join('');

    let sliceOne = reverse.slice(0, (input.length/2));
    let sliceTwo = reverse.slice(reverse.length/2);
    console.log(sliceTwo);
    console.log((sliceOne));

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');