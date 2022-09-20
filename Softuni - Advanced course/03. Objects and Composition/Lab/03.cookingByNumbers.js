function cookingByNumbers(...elements) {

    let initial = Number(elements.shift());

    const parser = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x * 0.8
    }

    for (let command of elements) {
        initial = parser[command](initial);
        console.log(initial);
    }


}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');