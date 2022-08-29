function race (input){

    let people = input.shift().split(', ');
    let nameMap = new Map();

    people.forEach(person => {
        nameMap.set(person,0);
    });

    let letterPattern = /[A-Za-z]+/gm;
    let digitPattern = /\d/gm;

    for (let index = 0; index < input.length; index++) {

        let currentLine = input[index];
        if(currentLine === 'end of race'){
            break;
        }

        let name = currentLine.match(letterPattern).join('');
        let distance = (currentLine.match(digitPattern)).reduce((a,b) => {
            return Number(a) + Number(b)
        },0);

        if(nameMap.has(name)){

            let prevDistance = nameMap.get(name);

            prevDistance += distance;

            nameMap.set(name, prevDistance);
        }
        
    }

    let sortedNames = Array.from(nameMap).sort((a, b) => {
        return b[1] - a[1];
    });

    
    
    let winners = sortedNames.slice(0,3);
    console.log(`1st place: ${winners[0][0]}`);
    console.log(`2nd place: ${winners[1][0]}`);
    console.log(`3rd place: ${winners[2][0]}`);
    
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']
);