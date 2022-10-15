function jucesFlavour(arr) {
    let juices = {};
    let bottles = {};

    function createBottle(flavour) {
        if (juices[flavour] >= 1000) {
            if (!bottles.hasOwnProperty(flavour)) {
                bottles[flavour] = 0;
            }
            let numOfBottles = Math.floor(juices[flavour] / 1000);
            bottles[flavour] += numOfBottles;
            juices[flavour] -= numOfBottles * 1000;
        }
    }

    for (let juise of arr) {
        let [flavour, qty] = juise.split(" => ");

        if (!juices.hasOwnProperty(flavour)) {
            juices[flavour] = 0;
        }
        juices[flavour] += Number(qty);
        createBottle(flavour);
    }

    for (let flavour in bottles) {
        console.log(`${flavour} => ${bottles[flavour]}`);
    }
}

console.log(
    jucesFlavour([
        "Orange => 2000",
        "Peach => 1432",
        "Banana => 450",
        "Peach => 600",
        "Strawberry => 549",
    ])
);
console.log(
    jucesFlavour([
        "Kiwi => 234",
        "Pear => 2345",
        "Watermelon => 3456",
        "Kiwi => 4567",
        "Pear => 5678",
        "Watermelon => 6789",
    ])
);
