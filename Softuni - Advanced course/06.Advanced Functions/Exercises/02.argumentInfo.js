function argumentInfo (...params){
    let result = {};
    for(let el of params){
        let type = typeof(el);
        console.log(`${type}: ${el}`);

        if(!result.hasOwnProperty(type)){
            result[type] = 0;
        }

        result[type] = result[type] + 1;
    }

    let buff = '';
    for(let [k, v] of Object.entries(result)){
        buff += `${k} = ${v}\n`
    };
    console.log(buff);
    
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });