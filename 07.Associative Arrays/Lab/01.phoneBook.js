function phoneBook (data){

    let phoneBooks = {};

    for(let line of data){
        let tokens = line.split(' ');
        let name = tokens[0];
        let number = tokens[1];
        phoneBooks[name] = number;
        
    }

    for(let key in phoneBooks){
        console.log(key, '->', phoneBooks[key]);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);
phoneBook(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
);