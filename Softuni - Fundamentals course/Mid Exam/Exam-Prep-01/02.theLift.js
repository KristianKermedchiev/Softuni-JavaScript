function theLift (input){

    let people = Number(input.shift()); // 15

    let wagons = input.shift().split(' ').map(Number); // 0 0 0 0 0
    let fullWagon = 0;
    let newWagons = [];
    let wagonsLength = wagons.length;

    for (let i = 0; i < wagonsLength; i++) {
        let currentWagon = wagons[i];
            while(currentWagon !== 4){
                currentWagon++;
                people--;
                if(people === 0){
                    break;
                }
            }
            wagons[i] = currentWagon;
            if(people === 0){
                break;
            }
    }

    let isFull = wagons.filter(w => w!==4);

    if(isFull.length === 0 && people == 0){
        console.log(wagons.join(' '));
    } else if(isFull.length !== 0){
        console.log(`The lift has empty spots!`);
        console.log(wagons.join(' '));
    } else {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagons.join(' '));
    }
}
theLift([
    "15",
    "0 0 0 0 0"
]);
theLift([
    "20",
    "0 2 0"
]);