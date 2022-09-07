function muOnline(input) {

    let health = 100;
    let bitcoins = 0;
    let dungeon = input.split('|');
    let currentHealth = 0;
    let healedAmmount = 0

    for (let i = 0; i < dungeon.length; i++) {

        let action = dungeon[i].split(' ')

        let command = action[0];

        let value = action[1];

        switch (command) {
            case 'potion':
                healedAmmount = Number(value);
                currentHealth = health;
                health += Number(value);

                if (health > 100) {
                    healedAmmount = 100 - currentHealth
                }

                if (health > 100) {
                    health = 100;
                }

                console.log(`You healed for ${healedAmmount} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                bitcoins += Number(value);
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                health -= Number(value);
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${i+1}`);
                    return;
                }
                break;
        }
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");