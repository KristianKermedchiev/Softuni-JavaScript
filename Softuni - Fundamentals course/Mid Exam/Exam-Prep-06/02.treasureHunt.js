function treasureHunt (array){

    let initialLoot = array.shift().split('|');
    let index = 0;
    let command = array[index++];

    while(command !== 'Yohoho!'){
        let tokens = command.split(' ');
        let operation = tokens.shift();

        switch(operation){

            case 'Loot':

                for (let el of tokens) {
                    if(!initialLoot.includes(el)){
                        initialLoot.unshift(el);
                    }
                }
                break;
            case 'Drop': 

            let i = Number(tokens[0]);
            if(i< 0 || i > initialLoot.length){
                command = array[index++];
                continue;
            }
            let element = initialLoot.splice(i,1);
            initialLoot.push(element[0]);
            break;
            case 'Steal': 
            let j = Number(tokens[0]);
            let items = initialLoot.splice(-j)
            console.log(items.join(', '));
            break;
        }

        command = array[index++];
        
    }

    let sum = 0;

    for (let el of initialLoot) {
        sum += el.length;
    }
    if(initialLoot.length > 0){
        let avg = sum / initialLoot.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]);
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]);