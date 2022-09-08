function worldTour(input) {

    let initialString = input.shift();

    let line = input.shift();

    let startIndex;
    let endIndex;

    while (line !== 'Travel') {
        let [action, first, last] = line.split(':');

        switch (action) {
            case 'Add Stop':

                startIndex = Number(first);

                if (startIndex < 0 || startIndex >= initialString.length) {
                    console.log(initialString);
                    break;
                }

                let value = last;
                let firstPart = initialString.slice(0, startIndex);
                let secondPart = initialString.slice(startIndex);
                initialString = firstPart + value + secondPart;
                console.log(initialString);

                break;
            case 'Remove Stop':
                startIndex = Number(first);
                endIndex = Number(last);
                
                if(!initialString[startIndex] || !initialString[endIndex]){
                    console.log(initialString);
                    break;
                };

                let subStr = initialString.substring(startIndex, endIndex + 1);
                initialString = initialString.replace(subStr, '');
                console.log(initialString);

                break;
            case 'Switch':
                let oldValue = first;
                let newValue = last;
                let pattern = new RegExp(oldValue, 'g')
                initialString = initialString.replace(pattern, newValue);
                console.log(initialString);
                break;
        }
        line = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${initialString}`);

}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);