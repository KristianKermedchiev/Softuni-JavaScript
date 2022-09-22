function lowestPrices(input) {

    let res = {};

    for (let el of input) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (res.hasOwnProperty(product)) {
            let currentTown = res[product][town];
            let currentPrice = res[product]['price'];
            if (currentPrice > price) {
                res[product] = { town, price };
            }
        } else {
            res[product] = { town, price };
        }
    }

    for (let [product, value] of Object.entries(res)) {

        console.log(`${product} -> ${value.price} (${value.town})`)

    }

}
lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);