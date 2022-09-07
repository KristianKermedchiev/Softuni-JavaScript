function shoppingList(array) {

    let initialList = array.shift().split('!');
    let index = 0;
    let command = array[index++];
   
    while (command !== 'Go Shopping!') {

        let token = command.split(' ')
        let action = token.shift();
        let oldItem = token[0];
        let newItem = token[1];

        switch (action) {
            case 'Urgent':
                if(initialList.includes(oldItem.toString()) === true){
                    command = array[index++];
                    continue;    
                } else {
                    initialList.unshift(oldItem);
                }
                break;
            case 'Unnecessary':
                if(initialList.includes(oldItem.toString()) === false){
                    command = array[index++];
                    continue;   
                } else {
                    for (let i = 0; i < initialList.length; i++) {
                        let currentEl = initialList[i];
                        if(currentEl === oldItem){
                            let now = initialList.indexOf(currentEl);
                            initialList.splice(now, 1)
                        }
                      }
                
                }
                break;
            case 'Correct':
                if(initialList.includes(oldItem.toString()) === true){
                    let thisItem = initialList.indexOf(oldItem);
                    initialList[thisItem] = newItem;
                } else {
                    command = array[index++];
                    continue;   
                }
                break;
            case 'Rearrange':
                if(initialList.includes(oldItem.toString()) === true){
                    let thisItem = initialList.indexOf(oldItem);
                    initialList.splice(thisItem,1);
                    initialList.push(oldItem);
                }
                break;
        }

        command = array[index++];
    }

    console.log(initialList.join(', '))
}
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);