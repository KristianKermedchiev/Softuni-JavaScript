function armies(input) {
    let armiesResult = {};

    for (let line of input) {
        let tokens = line.split(' ');


        if (!line.includes('+') && !line.includes(':')) {
            let tokens = line.split(' ');
            let command = tokens.pop();
            let name = tokens.join(' ');

            if (command === 'arrives') {
                armiesResult[name] = {};

            } else if (command === 'defeated') {
                delete armiesResult[name];
            }

        } else if (line.includes(':')) {
            let tokens = line.split(': ');
            let name = tokens[0];
            let [armyName, armyCount] = tokens[1].split(', ');
            if (armiesResult.hasOwnProperty(name)) {
                armiesResult[name][armyName] = Number(armyCount);
            }
        } else {
            let tokens = line.split(' + ');
            let name = tokens[0];
            let count = Number(tokens[1]);
            for (let [generalName, armies] of Object.entries(armiesResult)) {
                if (armies.hasOwnProperty(name)) {
                    let oldValue = armies[name];
                    armies[name] = oldValue + count;
                }
            }

        }
    }

    let totalArmies = {};

    for (let [generalname, army] of Object.entries(armiesResult)) {
        let sum = 0;
        for (let armyCount of Object.values(army)) {
            sum += armyCount;
        }
        totalArmies[generalname] = sum;
    }

    let sortTotalArmy = Object.entries(totalArmies).sort(([keyA, valA], [keyB, valB]) => {
        return valB - valA;
    })
    for (let [generalname, totalArmy] of sortTotalArmy) {
        console.log(`${generalname}: ${totalArmy}`);
        let sortCountArmy = Object.entries(armiesResult[generalname]).sort(([keyA, valA], [keyB, valB]) => {
            return valB - valA;
        })
        for (let [armyName, armyCount] of sortCountArmy) {
            console.log(`>>> ${armyName} - ${armyCount}`);
        }
    }

}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);
armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);