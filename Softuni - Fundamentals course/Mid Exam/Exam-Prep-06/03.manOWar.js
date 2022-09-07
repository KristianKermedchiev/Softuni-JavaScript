function manOwar(input) {

    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let health = Number(input.shift());
    let i = 0;
    let command = input[i++];

    while (command !== 'Retire') {
        let tokens = command.split(' ')
        let action = tokens.shift();

        switch (action) {
            case 'Fire':
                let index = Number(tokens[0]);
                let fireDamage = Number(tokens[1]);

                if(index > warShip.length || index < 0){
                    command = input[i++];
                    continue;
                }

                warShip[index] -= fireDamage;

                if(warShip[index] <= 0){
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
                break
            case 'Defend':

            let startIndex = Number(tokens[0]);
            let endindex = Number(tokens[1]);
            let defendDamage = Number(tokens[2]);

            if(startIndex > pirateShip.length || endindex > pirateShip.length || startIndex < 0 || endindex < 0){
                command = input[i++];
                continue;
            }

            for (let j = startIndex; j <= endindex; j++) {
                    pirateShip[j] = pirateShip[j] - defendDamage;
                    if(pirateShip[j] <= 0){
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    }
                
            }
                break
            case 'Repair':

            let repairIndex = Number(tokens[0]);
            let repairHealth = Number(tokens[1]);

            if(repairIndex > pirateShip.length - 1|| repairIndex < 0){
                command = input[i++];
                continue;
            }

            pirateShip[repairIndex] += repairHealth;

             if(pirateShip[repairIndex] > health){
                 pirateShip[repairIndex] = health;
             }
                break
            case 'Status':

                let counter = 0;

                for (let k = 0; k < pirateShip.length; k++) {
                    
                    let currentPart = pirateShip[k];
                    if(currentPart < health * 0.2){
                        counter++;
                    }
                }

                console.log(`${counter} sections need repair.`);
                break;
        }

        command = input[i++];
    }

    let pirateSum = 0;
    let warshipSum = 0;

    for (let y = 0; y < pirateShip.length; y++) {
        pirateSum += pirateShip[y]
        
    }

    for (let z = 0; z < warShip.length; z++) {
        warshipSum += warShip[z]
        
    }

    console.log(`Pirate ship status: ${pirateSum}`);
    console.log(`Warship status: ${warshipSum}`);

}
manOwar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"]);
manOwar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);