function plantDiscovery (input){
    let n = input.shift();
    let myPlants = {};
    for(let i = 0; i < n; i++){
        let [plant, rarity] = input.shift().split("<->");
        myPlants[plant] = {['rarity']: rarity, ['rating']: []}
    }
    let line = input.shift();
    while(line !== 'Exhibition'){

        let temp = line.split(': ')
        let [plant, rating] = temp[1].split(' - ');
        if(!myPlants.hasOwnProperty(plant)){
            console.log(`error`);
            line = input.shift();
            continue;
        }

        if(line.includes('Rate')){
            let temp = line.split(': ')
            let [plant, rating] = temp[1].split(' - ');
            myPlants[plant]['rating'].push(rating);
        } else if (line.includes('Update')){
            let temp = line.split(': ')
            let [plant, rarity] = temp[1].split(' - ');
            myPlants[plant]['rarity'] = rarity;
        } else if (line.includes('Reset')){
            let temp = line.split(': ')
            let [plant] = temp[1].split(' - ');
            myPlants[plant]['rating'] = [];
        }
        line = input.shift();
    }

    console.log(`Plants for the exhibition:`);
    for(let plant in myPlants){
        let myLength = myPlants[plant]['rating'].length;
        let myRating = myPlants[plant]['rating'];
        let total = 0;
        for(let el of myRating){
            total += Number(el); 
        }
        if(total === 0 ){
            console.log(`- ${plant}; Rarity: ${myPlants[plant]['rarity']}; Rating: ${total.toFixed(2)}`);
        } else {
            console.log(`- ${plant}; Rarity: ${myPlants[plant]['rarity']}; Rating: ${(total / myLength).toFixed(2)}`);
        }
    }
}
plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);
plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]);