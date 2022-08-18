function cardGame (input){

    let player = new Map();

    let enumCard = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };

    let enumCardType = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    for(let el of input){

        let tokens = el.split(': ');
        let name = tokens.shift();
        let decksAsString = tokens[0]
        let deckArray = decksAsString.split(', ')
        if(!player.has(name)){
            player.set(name, new Set());
        }

        for( let card of deckArray){
            player.get(name).add(card);
        }
    }

    for(let [key, value] of player){
        let sum = 0;
        for(let card of value){
            let cardInfo = card.split('');
            let cardType = cardInfo.pop();
            let cardPower = cardInfo.join('');
            let cardPowerAsNumber = enumCard[cardPower];
            let cardTypeAsNumber = enumCardType[cardType];
            sum+= cardPowerAsNumber * cardTypeAsNumber;
            
        }
        console.log(`${key}: ${sum}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
);
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
);