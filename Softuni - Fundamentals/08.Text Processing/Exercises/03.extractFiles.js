function extractFile(input) {

    let myArray = input.split('\\');

    let myFile = '';

    for (let el of myArray) {
        if (el.includes(".")) {
            myFile = el.split('.');
            let ext = myFile.pop();
            let file = myFile.join('.')
            
            console.log(`File name: ${file}`);
            console.log(`File extension: ${ext}`);
        }
    }
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');