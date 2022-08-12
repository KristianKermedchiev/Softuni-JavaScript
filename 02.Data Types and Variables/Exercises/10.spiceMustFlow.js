function spiceMustFlow (yield){

    let days = 0;
    let extract= 0;
    let food = 1;

    for(let i = yield; i >= 100; i-=10){
        days++
        extract+=i;
        food++
    }

    let total = extract - (food * 26);
    console.log(days);

    if(days !== 0){
        console.log(total);
    } else {
        console.log(0);
    }
    
}
spiceMustFlow(111);
spiceMustFlow(450);