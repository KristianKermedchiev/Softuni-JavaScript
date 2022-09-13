function needForSpeed(input) {
  let n = input.shift();

  let myCars = {};

  for (let i = 0; i < n; i++) {
    let currentCar = input.shift();
    let [car, mileage, fuel] = currentCar.split("|");
    myCars[car] = { ["mileage"]: Number(mileage), ["fuel"]: Number(fuel) };
  }

  let line = input.shift();
  while (line !== "Stop") {
    if (line.includes("Drive ")) {
      let [command, car, distance, fuel] = line.split(" : ");

      let givenDistance = Number(distance);
      let givenFuell = Number(fuel);

      let currentFuel = myCars[car]["fuel"];

      if (Number(currentFuel) < fuel) {
        console.log(`Not enough fuel to make that ride`);
      } else {
        myCars[car]["mileage"] += Number(distance);
        myCars[car]["fuel"] -= Number(fuel);
        console.log(
          `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
      }

      if (myCars[car]["mileage"] > 100000) {
        delete myCars[car];
        console.log(`Time to sell the ${car}!`);
      }
    } else if (line.includes("Refuel")) {
      let [command, car, fuel] = line.split(" : ");

      let currentFuel = myCars[car]["fuel"];
      let refuel = 0;
      if (currentFuel + Number(fuel) > 75) {
        myCars[car]["fuel"] = 75;
        refuel = 75 - currentFuel;
        console.log(`${car} refueled with ${refuel} liters`);
      } else {
        myCars[car]["fuel"] += Number(fuel);
        console.log(`${car} refueled with ${fuel} liters`);
      }
    } else if (line.includes("Revert")) {
      let [command, car, kilometers] = line.split(" : ");
      myCars[car]["mileage"] -= Number(kilometers);

      if (myCars[car]["mileage"] < 10000) {
        myCars[car]["mileage"] = 10000;
      } else {
        console.log(`${car} mileage decreased by ${kilometers} kilometers`);
      }
    }
    line = input.shift();
  }

  for (let key in myCars) {
    console.log(
      `${key} -> Mileage: ${myCars[key]["mileage"]} kms, Fuel in the tank: ${myCars[key]["fuel"]} lt.`
    );
  }
}
needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
needForSpeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);