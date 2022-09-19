function cityRecord (name, popuation, treasury){
    let myCityRecord = {};
    myCityRecord['name'] = name;
    myCityRecord['population'] = popuation;
    myCityRecord['treasury'] = treasury;

    return myCityRecord;

}
console.log(cityRecord('Tortuga',
7000,
15000
));
console.log(cityRecord('Santo Domingo',
12000,
23500
));