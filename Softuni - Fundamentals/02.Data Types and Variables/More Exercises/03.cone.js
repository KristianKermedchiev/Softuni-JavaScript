function cone (num1, num2) {

    let volume = ((1 / 3) * Math.PI * Math.pow(num1, 2) * num2).toFixed(4);
    let s = (Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2)));
    let l = Math.PI * num1 * s;
    let B = Math.PI * (num1 * num1)
    let A = (l + B).toFixed(4);

    console.log(`volume = ${volume}`);
    console.log(`area = ${A}`);

}
cone(3,5);
cone(3.3,7.8);