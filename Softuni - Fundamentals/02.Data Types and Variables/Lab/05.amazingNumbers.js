function amazingNumbers(input) {
    let num = String(input);
    let sum = 0;

    for (let index = 0; index < num.length; index++) {
        sum+=Number(num[index])
    }

    if (sum.toString().includes(9)) {
        console.log(`${num} Amazing? True`);
    }else {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumbers(1233);
amazingNumbers(999);