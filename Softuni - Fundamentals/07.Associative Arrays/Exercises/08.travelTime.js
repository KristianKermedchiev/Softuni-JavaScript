function travelTime(input){
    let result = {};

    for(let line of input){
        let tokens = line.split(' > ');
        let country = tokens[0];
        let town = tokens[1];
        let cost = Number(tokens[2]);

        if(!result.hasOwnProperty(country)){
            result[country] = {};
        }

        if(!result[country].hasOwnProperty(town)){
            result[country][town] = 0;
        }

        let oldCost = result[country][town];
        if(oldCost > cost || oldCost === 0){
            result[country][town] = cost;
        }

    }

    let sortCountry = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    })

    for(let [key, townInfo] of sortCountry) {
        let sortTown = Object.entries(townInfo).sort(([keyA, valueA], [keyB, valueB]) => {
            return valueA - valueB;
        })
        let buff = `${key} -> `;
        for (let [townName, townCost] of sortTown){
            buff += `${townName} -> ${townCost} `;
        }
        console.log(buff);
    }   
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
);
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
);