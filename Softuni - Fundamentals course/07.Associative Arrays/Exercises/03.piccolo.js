function piccolo (input){

    let parking = new Set();
    for(let line of input){
        let tokens = line.split(', ');
        let command = tokens[0];
        let carNumber = tokens[1];
        switch(command){
            case 'IN':
                parking.add(carNumber);
                break;
                case 'OUT':
                    parking.delete(carNumber);
                    break;
        }

    }

    let sorted = Array.from(parking).sort();
    
    for(el of sorted){
        if(parking.size === 0){
            return `Parking Lot is Empty`
        } else {
            console.log(el);
        }
        
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
);