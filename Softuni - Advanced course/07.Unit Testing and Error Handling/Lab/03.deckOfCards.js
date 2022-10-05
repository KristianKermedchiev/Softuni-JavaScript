function printDeckOfCards(cards) {
    let flag = true;

    function playingCards(face, suit) {

        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        if (validFaces.indexOf(face.toString()) === -1) {
            flag = false;
        }

        if (validSuits.indexOf(suit) === -1) {
            flag = false;
        }

        switch (suit) {
            case 'S': suit = '\u2660 '; break;
            case 'H': suit = '\u2665 '; break;
            case 'D': suit = '\u2666 '; break;
            case 'C': suit = '\u2663 '; break;
        }

        return {
            face: face,
            suit: suit,
            toString() {
                return this.face + this.suit;
            }
        }

    }

    let buff = '';
    for(let el of cards){

        if(el.length === 2){
            let face = el[0];
            let suit = el[1];
            let temp = playingCards(face, suit);
            if(!flag){
                console.log(`Invalid card: ${temp.face + suit}`)
                return;
            }else {
                buff += temp.face + temp.suit;
            }  
        } else if (el.length === 3){
            let face = el[0] + el[1];
            let suit = el[2];
            let temp = playingCards(face, suit);
            if(!flag){
                console.log(`Invalid card: ${temp.face + suit}`)
                return;
            }else {
                buff += temp.face + temp.suit;
            } 
        }

    }
    console.log(buff)
} 
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['2C', '3D', 'QD', '1C']);