function carFactory(car){

    if(car.power<=90){
        car.engine = {
            power: 90, 
            volume: 1800 
        };
        delete car.power;
    } else if (car.power <= 120){
        car.engine = { power: 120, volume: 2400 };
        delete car.power;
    } else if (car.power <=200){
        car.engine = { power: 200, volume: 3500 };
        delete car.power;
    }

    if(car.carriage === 'hatchback'){
        car.carriage = { type: 'hatchback', color:`${car.color}` };
        delete car.color;
    }  else if (car.carriage === 'coupe'){
        car.carriage = { type: 'coupe', color: `${car.color}`};
        delete car.color;
    }

    if(car.wheelsize % 2 === 0){
        car.wheelsize = car.wheelsize - 1;
        car.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];
        delete car.wheelsize;
    } else {
        car.wheels = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];
        delete car.wheelsize;
    }

    return car;

}
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);