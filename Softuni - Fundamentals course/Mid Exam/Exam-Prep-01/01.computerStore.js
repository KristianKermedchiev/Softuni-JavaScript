function computerStore (array){

    let customerType = array.pop();
    let sum = 0;
    let taxes = 0;

    for (let i = 0; i < array.length; i++) {
        let currentPrice = Number(array[i]);
        if(currentPrice < 0) {
            console.log(`Invalid price!`);
            continue;
        }
        sum += currentPrice;
        taxes += currentPrice * 0.2;
    }

    if(sum <= 0){
        console.log(`Invalid order!`);
        return;
    }

    console.log(`Congratulations you've just bought a new computer!`);
    console.log(`Price without taxes: ${((sum)).toFixed(2)}$`)
    console.log(`Taxes: ${(taxes).toFixed(2)}$`);
    console.log(`-----------`);
    
    if (customerType === 'special'){
        console.log(`Total price: ${((sum + taxes) * 0.9).toFixed(2)}$`);
    } else if(customerType === 'regular'){
        console.log(`Total price: ${(sum + taxes).toFixed(2)}$`);
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);  
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
]);
computerStore([
    'regular'
]);
    