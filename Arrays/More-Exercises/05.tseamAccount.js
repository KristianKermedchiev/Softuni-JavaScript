function tseamAccount (array){

    let currentGames = array.shift().split(' ');

    for (let i = 0; i < array.length; i++) {

        let currentElement = array[i].split(' ');
        let command = currentElement[0];
        let game = currentElement[1];

        if(command === 'Install'){
            if(!currentGames.includes(game)){
                currentGames.push(game);
            }
        } else if(command === 'Uninstall'){
            if(currentGames.includes(game)){
                let index = currentGames.indexOf(game);
                currentGames.splice(index,1);
            }
        } else if(command === 'Update'){
            if(currentGames.includes(game)){
                let index = currentGames.indexOf(game);
                currentGames.splice(index,1);
                currentGames.push(game);
            }
        } else if(command === 'Expansion'){
            game = game.split('-')
            let spiel = game[0]
            let exp = game[1]
            if (currentGames.includes(spiel)) {
                let index = currentGames.indexOf(spiel)
                currentGames.splice(index + 1, 0, `${spiel}:${exp}`)
            }
        } else if (command === 'Play!') {
            console.log(currentGames.join(' '));
            break;
        }
    }
}
tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
);

tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
);
