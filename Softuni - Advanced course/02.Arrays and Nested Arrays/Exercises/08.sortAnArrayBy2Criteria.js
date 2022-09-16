function sortAnArrBy2Criteria(input) {

    let sortArr = input.sort((a,b) => {
        if(a.length !== b.length){
           return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    })
    console.log(sortArr.join('\n'))
}
console.log(sortAnArrBy2Criteria(['alpha',
    'beta',
    'gamma']
));
console.log(sortAnArrBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

));
console.log(sortAnArrBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']
));