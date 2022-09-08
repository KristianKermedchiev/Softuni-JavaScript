function destinationMapper (input){

    let pattern = /(=|\/)([A-Z][A-z]{2,})\1/g;
    let match = pattern.exec(input);

    let myArr = [];
    let myPoints = 0;

    while(match){
        myArr.push(match[2]);
        match = pattern.exec(input);
    }
    
    for(let el of myArr){
        let points = el.length;
        myPoints += points;
    }
   console.log(`Destinations: ${myArr.join(', ')}`);
   console.log(`Travel Points: ${myPoints}`);

}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");