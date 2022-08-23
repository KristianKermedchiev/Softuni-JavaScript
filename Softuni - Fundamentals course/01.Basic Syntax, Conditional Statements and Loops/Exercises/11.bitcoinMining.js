function bitcoinMining(array){

    let totalMoney = 0;
    let days = 0;
    let bitcoinPrice = 11949.16;
    let bitcoin = 0;
    let money = 0;
    let dayBC = 0;

    for (let i = 0; i < array.length; i++) {
        days++;

        if(days % 3 === 0){
            array[i] = array[i] - (array[i] * 0.3);
        }
        money = array[i] * 67.51;
        totalMoney += money;

        while(totalMoney >= 11949.16){
            totalMoney -= 11949.16;
            bitcoin++;

            if(bitcoin === 1){
                dayBC = days;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoin}`);

    if(dayBC > 0){
        console.log(`Day of the first purchased bitcoin: ${dayBC}`);

    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}
bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);