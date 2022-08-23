function partyTime (input){

    let vip = [];
    let normal = [];

    let isParty = false;
    
    for(let line of input){
        if (line === 'PARTY'){
            isParty = true;
            continue;
        }

        if(!isParty){
            let firstChar = line[0];
            if(isNaN(firstChar)){
                normal.push(line);
            } else {
                vip.push(line);
            }
            
        } else {
                let firstChar = line[0];
                if(isNaN(firstChar)){
                    let index = normal.indexOf(line);
                    normal.splice(index,1);
                } else {
                let index = vip.indexOf(line);
                vip.splice(index,1);
                }
            }
        }
    

    let size = vip.length + normal.length;
    console.log(size);

    for(let code of vip){
        console.log(code);
    }

    for(let code of normal){
        console.log(code);
    }
}
partyTime();['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
);