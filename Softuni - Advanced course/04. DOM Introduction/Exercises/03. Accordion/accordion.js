function toggle() {
    let myButton = document.getElementsByClassName("button")[0];
    let myDiv = document.getElementById('extra');
    console.log(myDiv);
    console.log(myDiv.style.display);
    if (myButton.textContent == `More`) {
        myDiv.style.display = `block`;
        myButton.textContent = `Less`;
    } else if (myButton.textContent == `Less`) {
        myDiv.style.display = `none`;
        myButton.textContent = `More`;
    }
}