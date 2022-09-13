function heroesOfCodeAndLogic(input) {
  let n = input.shift();
  let myHeroes = {};

  for (let index = 0; index < n; index++) {
    let temp = input.shift();
    let [name, hp, mp] = temp.split(" ");
    myHeroes[name] = { ["health"]: hp, ["mana"]: mp };
  }

  let line = input.shift();

  while (line !== "End") {
    if (line.includes("CastSpell")) {
      let [command, hero, mp, spellName] = line.split(" - ");

      let neededMana = Number(mp);
      let heroMana = Number(myHeroes[hero]["mana"]);

      if (heroMana >= Number(mp)) {
        mana = heroMana - Number(mp);
        myHeroes[hero]["mana"] = mana;
        console.log(
          `${hero} has successfully cast ${spellName} and now has ${myHeroes[hero]["mana"]} MP!`
        );
      } else {
        console.log(`${hero} does not have enough MP to cast ${spellName}!`);
      }
    } else if (line.includes("TakeDamage")) {
      let [command, hero, damage, attacker] = line.split(" - ");

      health = Number(myHeroes[hero]["health"]) - Number(damage);

      if (health > 0) {
        myHeroes[hero]["health"] = health;
        console.log(
          `${hero} was hit for ${damage} HP by ${attacker} and now has ${myHeroes[hero]["health"]} HP left!`
        );
      } else {
        delete myHeroes[hero];
        console.log(`${hero} has been killed by ${attacker}!`);
      }
    } else if (line.includes("Recharge")) {
      let [command, hero, amount] = line.split(" - ");

      let ammountToRecharge = Number(amount);

      let currentMana = Number(myHeroes[hero]["mana"]);
      let manaAfterRecharge = currentMana + ammountToRecharge;

      if (manaAfterRecharge >= 200) {
        myHeroes[hero]["mana"] = 200;
        console.log(`${hero} recharged for ${200 - currentMana} MP!`);
      } else {
        myHeroes[hero]["mana"] = manaAfterRecharge;
        console.log(`${hero} recharged for ${ammountToRecharge} MP!`);
      }
    } else if (line.includes("Heal")) {
      let [command, hero, amount] = line.split(" - ");

      let ammountToHeal = Number(amount);

      let currentHealth = Number(myHeroes[hero]["health"]);
      let healthAfterHeal = currentHealth + ammountToHeal;

      if (healthAfterHeal >= 100) {
        myHeroes[hero]["health"] = 100;
        console.log(`${hero} healed for ${100 - currentHealth} HP!`);
      } else {
        myHeroes[hero]["health"] = healthAfterHeal;
        console.log(`${hero} healed for ${ammountToHeal} HP!`);
      }
    }

    line = input.shift();
  }

  for (let hero in myHeroes) {
    console.log(`${hero}`);
    console.log(`  HP: ${myHeroes[hero]["health"]}`);
    console.log(`  MP: ${myHeroes[hero]["mana"]}`);
  }
}
heroesOfCodeAndLogic([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  " Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
heroesOfCodeAndLogic([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);