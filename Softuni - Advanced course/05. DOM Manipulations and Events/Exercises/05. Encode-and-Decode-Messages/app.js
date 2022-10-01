function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(event) {
        let newMsg = '';
        let currentText = event.target.parentElement.children[1].value;
        for (let i = 0; i < currentText.length; i++) {
            let currentCh = currentText[i].charCodeAt();
            newMsg += String.fromCharCode(currentCh + 1);
        }
        let textAreas = document.querySelectorAll('textarea')
        let resultTextArea = textAreas[1];
        resultTextArea.value = newMsg;
        let currentTextArea = textAreas[0];
        currentTextArea.value = '';
    }

    function decode(event) {
        let currentArea = event.target.parentElement.children[1];
        let currentText = currentArea.value;
        let resultMsg = '';
        for (let i = 0; i < currentText.length; i++) {
            let ch = currentText[i].charCodeAt();
            resultMsg += String.fromCharCode(ch - 1);
        }
        currentArea.value = resultMsg;
    }
}