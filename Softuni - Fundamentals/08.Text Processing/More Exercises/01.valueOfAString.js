function valueOfString (input) {

    let command = input[1];

    let sum = 0;

    let myArr = input[0].split('');

    switch(command){
        case 'UPPERCASE':

            for (let el of myArr) {

                if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
                    sum+= el.charCodeAt();
                } else {
                    continue;
                }
            }

        break;

        case 'LOWERCASE':
            for (let el of myArr) {
                if (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) {
                    sum+= el.charCodeAt();
                } else {
                    continue;
                }
            }

        break;
    }
    
    console.log(`The total sum is: ${sum}`);
}
valueOfString(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']
);
valueOfString(['AC/DC',
'UPPERCASE']
);