function employees (input){

    for (let i = 0; i < input.length; i++) {
        let person = {}
            person.name = input[i];
            person.length = input[i].length;

        console.log(`Name: ${person.name} -- Personal Number: ${person.length}`);
        
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ]
    );