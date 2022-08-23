function addressBook (input){

    let myObj = {};

    for(let line of input){
        let [name, address] = line.split(':');
        myObj[name] = address;
        
    }

    let entries = Object.entries(myObj);
    let sortEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    })
   
    for(let [name, address] of sortEntries){
        console.log(`${name} -> ${address}`);
    }

}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
);