function addAndRemoveElements(input) {

    let result = [];
    let num = 1;

    for (let el of input) {
        switch (el) {
            case 'add':
                result.push(num);
                break;
            case 'remove':
                result.pop();
                break;

        }
        num++;
    }

    if (result.length === 0) {
        return 'Empty'
    } else {

        return result.join('\n')
    }

}
console.log(addAndRemoveElements(['add',
    'add',
    'add',
    'add']
));
console.log(addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
));
console.log(addAndRemoveElements(['remove',
    'remove',
    'remove']
));