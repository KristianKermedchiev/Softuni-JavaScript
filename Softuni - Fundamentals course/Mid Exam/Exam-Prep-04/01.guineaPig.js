function guineaPing (array){

    let food = array[0] * 1000;
    let hay = array[1] * 1000;
    let cover = array[2] * 1000;
    let weight = array[3] * 1000;

    for (let day = 1; day <= 30; day++) {
        food-= 300;
        if(day % 2 === 0){
            hay -= food * 0.05;
        }
        if(day % 3 === 0){
            cover -= (weight * 1) / 3;
        }

        if(hay <= 0 || food <= 0 || cover <= 0){
            console.log(`Merry must go to the pet store!`);
            return;
        }
    }

    console.log
    (`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);

}
guineaPing(["10", 
"5", 
"5.2", 
"1"]);
guineaPing(["1", 
"1.5", 
"3", 
"1.5"]);
guineaPing(["9",
"5",
"5.2",
"1"]);
