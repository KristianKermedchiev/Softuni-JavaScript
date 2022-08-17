function storeProvision(array1, array2) {

    let array1L = array1.length;
    let array2L = array2.length;
    let storeProducts = {};
    
    for (let i = 0; i < array1L; i += 2) {
        let product = array1[i];
        storeProducts[product] = Number(array1[i + 1]);
    }

    for (let y = 0; y < array2L; y += 2) {
        let product = array2[y];
        if (!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0;
        }
        storeProducts[product] += Number(array2[y + 1])
    }

    for (const product in storeProducts) {
        console.log(`${product} -> ${storeProducts[product]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    );