function blackFlag(input) {

    let days = input.shift();
    let dailyPlunder = input.shift();
    let expectedPlunder = input.shift();
    let total = 0;

    for (let i = 1; i <= days; i++) {

        total += Number(dailyPlunder);

        if (i % 3 === 0) {
            total += dailyPlunder * 0.5;
        } 
        if (i % 5 === 0) {
            total *= 0.7;
        }
    }

    if (total >= Number(expectedPlunder)) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    }
    else {
        console.log(`Collected only ${(total / Number(expectedPlunder) * 100).toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["5",
"40",
"100"]);
blackFlag(["10",
"20",
"380"]);