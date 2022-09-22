function storeCatalogue (input){

    input.sort();

    let res = {};

    for(let el of input){
        let temp  = el.split(' : ');
        let letter = temp[0][0];
        let product = temp[0] +': ' + temp[1];
        if(!res.hasOwnProperty(letter)){
            res[letter] = [];
            res[letter].push(product);
        } else {
            res[letter].push(product);
        }       
    }

    for(let [k, v] of Object.entries(res)){
        console.log(k);
        let sorted = v.sort();
        for(let el of sorted){
            console.log(`  ${el}`)
        }
    }
}
storeCatalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]);
storeCatalogue([
'Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'
]);