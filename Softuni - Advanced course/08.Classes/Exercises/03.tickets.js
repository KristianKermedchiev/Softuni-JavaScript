function tickets (array, sortCriteria){
   
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let result = [];

    for(let el of array){
        let destination = el.split('|')[0];
        let numPrice = (el.split('|')[1]);
        let price = Number(numPrice);
        let status = el.split('|')[2];
        result.push(new Ticket (destination, price, status));
       
    }

    switch (sortCriteria) {
        case 'destination':
            result.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            result.sort((a, b) => a.status.localeCompare(b.status));
            break;
        default:
            break;
    }
    
    return result;
}

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')