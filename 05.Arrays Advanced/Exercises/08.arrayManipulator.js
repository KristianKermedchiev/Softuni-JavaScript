function arrayManipulator(nums, commands) {

    for (let i = 0; i < commands.length; i++) {
        let currentValues = commands[i].split(' ');
        let currentCommand = currentValues.shift();

        currentValues = currentValues.map(Number);
        let sumPairs = 0;
        let pairsOfSums = [];

        switch (currentCommand) {

            case 'add':
                let indexToAdd = currentValues[0];
                let elementToAdd = currentValues[1];
                nums.splice(indexToAdd, 0, elementToAdd);
                break;

            case 'addMany':
                let indextoAddMany = currentValues.shift();
                nums.splice(indextoAddMany, 0, ...currentValues);
                break;

            case 'contains':
                console.log(nums.indexOf(currentValues[0]));
                break;

            case 'remove':
                let indexToRemove = currentValues[0];
                nums.splice(indexToRemove, 1);
                break;

            case 'shift':
                for (let i = 0; i < currentValues[0]; i++) {
                    nums.push(nums.shift());
                }
                break;

            case 'sumPairs':
                if (nums.length % 2 !== 0) {
                    nums.push(0);
                }

                for (let a = 0; a < nums.length; a += 2) {
                    sumPairs = nums[a] + nums[a + 1];
                    pairsOfSums.push(sumPairs);
                }
                nums = [...pairsOfSums];
                break;

            case 'print':
                console.log(`[ ${nums.join(', ')} ]`);
                break;

        }
    }
    
}
arrayManipulator([1, 2, 4, 5, 6, 7],

    ['add 1 8',
        'contains 1',
        'contains 3',
        'print']
)
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
)