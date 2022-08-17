function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let catsArray = [];

    for(let cat of input){
        let token = cat.split(' ');
        let catName = token[0];
        let catAge = token[1];
        let myCat = new Cat(catName, catAge);
        catsArray.push(myCat);

    }

    for(let kitty of catsArray){
        kitty.meow();
    }

}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);