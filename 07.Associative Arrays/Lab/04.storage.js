function storage (input){

    let myStorage = new Map();

    for(let line of input){
        let [product, quantity] = line.split(' ');

        if(myStorage.has(product)){
            let oldQuantity = myStorage.get(product);
            myStorage.set(product, Number(oldQuantity) + Number(quantity));
        } else {
            myStorage.set(product, quantity)
        }
    }
    
    for(let [k, v] of myStorage.entries()){
        console.log(k, '->', v);
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
);