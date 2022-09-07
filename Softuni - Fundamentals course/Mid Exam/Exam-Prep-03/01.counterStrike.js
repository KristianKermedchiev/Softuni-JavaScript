function counterStrike (array){

    let health = Number(array.shift());

    let wins = 0;

    for (let i = 0; i < array.length; i++) {

        if(array[i] === 'End of battle'){
            console.log(`Won battles: ${wins}. Energy left: ${health}`);
            break;
        }
        if(health < Number(array[i])){
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${health} energy`);
            break;
        }
        health -= array[i];
        if(health >= 0){
            wins++
            if(wins % 3 === 0){
                health += wins;
            }
        }
        
    }
}
counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]);
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"]);