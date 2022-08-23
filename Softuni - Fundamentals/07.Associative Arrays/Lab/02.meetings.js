function meetings (data){

    let myObj = {};

    for(let line of data){
        let [day, name] = line.split(' ');
        
        if(myObj.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        } else {
            myObj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for(let [key, value] of Object.entries(myObj)){
        console.log(key, "->", value);
    }

}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);
meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);