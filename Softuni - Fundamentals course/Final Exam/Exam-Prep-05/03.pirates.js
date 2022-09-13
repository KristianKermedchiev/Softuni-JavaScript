function pirates(input) {
  let cities = {};

  let command = input.shift();

  while (command !== "Sail") {
    let [city, population, gold] = command.split("||");

    let currentPop = Number(population);
    let currentGold = Number(gold);

    if (!cities.hasOwnProperty(city)) {
      cities[city] = { ["population"]: currentPop, ["gold"]: currentGold };
    } else {
      let oldPop = cities[city]["population"];
      let oldGold = cities[city]["gold"];

      cities[city]["population"] = oldPop + currentPop;
      cities[city]["gold"] = oldGold + currentGold;
    }
    command = input.shift();
  }

  for (let el of input) {
    if (el === "End") {
      break;
    }

    if (el.includes("Plunder")) {
      let [command, city, people, gold] = el.split("=>");

      let currentPeople = Number(people);
      let currentGold = Number(gold);

      cities[city]["population"] -= currentPeople;
      cities[city]["gold"] -= currentGold;

      console.log(
        `${city} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );

      if (cities[city]["population"] === 0 || cities[city]["gold"] === 0) {
        delete cities[city];

        console.log(`${city} has been wiped off the map!`);
      }
    } else if (el.includes("Prosper")) {
      let [command, city, gold] = el.split("=>");

      let currentGold = Number(gold);

      if (currentGold <= 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        let oldGold = cities[city]["gold"];
        cities[city]["gold"] = oldGold + currentGold;
        console.log(
          `${currentGold} gold added to the city treasury. ${city} now has ${
            oldGold + currentGold
          } gold.`
        );
      }
    }
  }

  let count = 0;

  for (let key of Object.keys(cities)) {
    count++;
  }

  if (count > 0) {
    console.log(
      `Ahoy, Captain! There are ${count} wealthy settlements to go to:`
    );

    for (let city in cities) {
      console.log(
        `${city} -> Population: ${cities[city]["population"]} citizens, Gold: ${cities[city]["gold"]} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }
}
pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);