function thePianist (input){

    let n = Number(input.shift());
    let myMusic = {};
    for(let i = 0; i < n; i++){
        let line = input.shift();
        let [piece, composer, key] = line.split('|');
        myMusic[piece] = {['composer']: composer, ['key']: key};
    }

    let line = input.shift();

    while(line !== 'Stop'){
        if(line.includes('Add')){
            let [command, piece, composer, key] = line.split('|');
            if(!myMusic.hasOwnProperty(piece)){
                myMusic[piece] = {['composer']: composer, ['key']: key};
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if(line.includes('Remove')){
            let [command, piece] = line.split('|');
            if(myMusic.hasOwnProperty(piece)){
                delete myMusic[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if(line.includes('ChangeKey')){
            let [command, piece, newKey] = line.split('|');
            if(myMusic.hasOwnProperty(piece)){
                myMusic[piece]['key'] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        line = input.shift();
    }

    for(let piece in myMusic){
        console.log(`${piece} -> Composer: ${myMusic[piece]['composer']}, Key: ${myMusic[piece]['key']}`);
    }

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop']);
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop']);