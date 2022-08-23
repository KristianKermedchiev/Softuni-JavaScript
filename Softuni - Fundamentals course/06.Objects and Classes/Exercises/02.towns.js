function towns (input){
    let myObject = {};

    for (let index = 0; index < input.length; index++) {

        let token = input[index].split(' | ');
        let townName = token[0];
        let latitude = Number(token[1]);
        let longitude = Number(token[2]);
        
        
        myObject.town = townName;
        myObject.latitude = latitude.toFixed(2);
        myObject.longitude = longitude.toFixed(2);
        console.log(myObject);
    }

}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);
towns(['Plovdiv | 136.45 | 812.575']);