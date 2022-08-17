function convertToJson(name, lastName, hairColor){
    let res = {
        name,
        lastName,
        hairColor
    }

    let resAsString = JSON.stringify(res);
    console.log(resAsString);
}
convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');