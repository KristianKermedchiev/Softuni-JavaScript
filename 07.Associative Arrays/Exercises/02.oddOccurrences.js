function oddOccurrences (input){

    let myMap = new Map();
    
    let data = input.split(' ');
    
    for(let key of data){
        key = key.toLowerCase();
        if(myMap.has(key)){
            let oldValue = myMap.get(key);
            myMap.set(key, oldValue+1);
        } else {
            myMap.set(key, 1)
        }
    }

    let sort = Array.from(myMap).filter(([key, value]) => {
        return value % 2 !==0;
    })

    let bufff = '';
    for(let [key, value] of sort){
        bufff += key + ' '
    }
    console.log(bufff);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');