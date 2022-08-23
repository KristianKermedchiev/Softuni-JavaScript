function converToObject (jsonData){

    let person = JSON.parse(jsonData);

    for (let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }

}
converToObject('{"name": "George", "age": 40, "town": "Sofia"}');
converToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');