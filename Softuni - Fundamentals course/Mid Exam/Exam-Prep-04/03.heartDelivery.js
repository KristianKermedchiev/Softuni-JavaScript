function heartDelivery (input = []) {

    let houses = input.shift().split('@').map(Number);
    let commands = input.shift();
   
    let currentIndex = 0;
   
    while (commands !== 'Love!') {
      let tokens = commands.split(' ');
      let jumpLength = +tokens[1];
   
      currentIndex += jumpLength;
   
      if (currentIndex >= houses.length) {
        currentIndex = 0;
      }
   
      if (houses[currentIndex] === 0) {
        console.log(`Place ${currentIndex} already had Valentine's day.`);
      } else {
        houses[currentIndex] -= 2;
        if (houses[currentIndex] === 0) {
          console.log(`Place ${currentIndex} has Valentine's day.`);
        }
      }
   
      commands = input.shift();
    }
   
    console.log(`Cupid's last position was ${currentIndex}.`);
   
    let isSuccess = true;
    let count = 0;
   
    for (const house of houses) {
      if (house !== 0) {
        isSuccess = false;
        count++;
      }
    }
   
    if (isSuccess) {
      console.log(`Mission was successful.`);
    } else {
      console.log(`Cupid has failed ${count} places.`);
    }
}
heartDelivery[("10@10@10@2",
"Jump 1",
"Jump 2",
"Love!")];
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]);