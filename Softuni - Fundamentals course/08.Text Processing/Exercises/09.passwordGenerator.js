function passwordGenerator(input) {

    let first = input[0];
    let second = input[1];
    let third = input[2];

    let text = first + second;
    let thirdArray = third.split('');
    let coppy = thirdArray.slice();
    let myArray = text.split('');
    let vowelsFirst = first.charCodeAt(97);
    let arr = [];

    let temp = '';
    for (let el of myArray) {
        if (el.charCodeAt() === 97 || el.charCodeAt() === 101 || el.charCodeAt() === 105 || el.charCodeAt() === 111 || el.charCodeAt() === 117) {

            for (let symb of coppy) {

                let temp = coppy.shift();
                arr.push(temp.toUpperCase());
                break;
            }

        } else {
            arr.push(el);
        }

        if (coppy.length === 0) {
            coppy = thirdArray.slice();;
        }
    }

    let password = arr.reverse().join('')
    console.log(`Your generated password is ${password}`);

}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
);
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]

);
passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
]
);