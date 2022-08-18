function schoolGrade (input){

    let myMap = new Map();

    for(let line of input){
        let tokens = line.split(' ');
        let name = tokens.shift();
        let setOfGrade = tokens;
    
        if(!myMap.has(name)){
            myMap.set(name, setOfGrade)
        } else {
            let oldSet = myMap.get(name);
            for(let grade of setOfGrade){
                oldSet.push(grade);
            }
            myMap.set(name, oldSet)
        }
        
    }

    let sorted = Array.from(myMap.entries()).sort(([keyA, valA], [keyB, valB]) => {
        
        return keyA.localeCompare(keyB);
    })
    
    for(let [k, v] of sorted){
        let sumGrade = 0;
        for(grade of v){
            sumGrade += Number(grade);
        }
        let avg = sumGrade / v.length;
        console.log(`${k}: ${avg.toFixed(2)}`);
    }
}
schoolGrade(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);
schoolGrade(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
);