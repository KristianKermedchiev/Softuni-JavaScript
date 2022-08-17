function gladiatorInv (input) {

    let inventory = input.shift().split(' ')
    let currentInv = [];
    for(let el of inventory){
        currentInv.push(el);
    }

   
   let line = input.shift();

    while(line){
        
        if(line.includes('Buy')){
            let [command, item] = line.split(' ');
            if(currentInv.includes(item)){
                line = input.shift();
                continue
            } else{
                currentInv.push(item);
            }
        } else if (line.includes('Trash')){
            let [command, item] = line.split(' ');
            if(currentInv.includes(item)){
                let index = currentInv.indexOf(item);
                currentInv.splice(index, 1);
            } else {
                line = input.shift();
                continue;
            }
        } else if (line.includes('Repair')){
            let [command, item] = line.split(' ');
            
            if(currentInv.includes(item)){
                let index = currentInv.indexOf(item);
                currentInv.splice(index, 1);
                currentInv.push(item);
            } else {
                line = input.shift();
                continue;
            }
        } else if (line.includes('Upgrade')){
            let [command, itemUpgr] = line.split(' ');
            let [item, Upgrade] = itemUpgr.split('-')
            if(currentInv.includes(item)){
                let index = currentInv.indexOf(item);
                let newItem = `${item}:${Upgrade}`
                currentInv.splice(index+1, 0, newItem)
            } else{
                line = input.shift();
                continue;
            }
        }

        line = input.shift();
    }

    let finalInventory = currentInv.join(' ');
    console.log(finalInventory);

}
gladiatorInv(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
);
gladiatorInv(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
);