function modernTimes(input) {

    let myArr = input.split(' ');

    for (let el of myArr) {
        if (el.length > 1 && el.includes('#')) {

            let flag = true;

            let wordToLower = el.toLowerCase();

            for (let index = 1; index <= wordToLower.length; index++) {
                if (wordToLower.charCodeAt(index) < 97 || wordToLower.charCodeAt(index) > 122) {
                    flag = false;
                    break;
                }
            }

            if (flag === true) {
                console.log(el.slice(1));
            }
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');