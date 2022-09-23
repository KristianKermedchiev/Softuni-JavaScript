function subtract() {
    let numOne = document.getElementById('firstNumber').value;
    let numTwo = document.getElementById('secondNumber').value;

    let sum = Number(numOne) - Number(numTwo);

    document.getElementById('result').innerText = sum;
}