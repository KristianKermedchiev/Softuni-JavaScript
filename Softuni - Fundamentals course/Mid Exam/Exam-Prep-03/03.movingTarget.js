function movingTarget(input) {

    let sequenceOfTargets = input.shift().split(" ").map(Number);

    while (input.length > 0) {
      let command = input.shift();
  
      if (command == "End") {
        break;
      }
      let curCommand = command.split(" ")[0];
      switch (curCommand) {
        case "Shoot":
          let indexOfShoot = Number(command.split(" ")[1]);
          let power = Number(command.split(" ")[2]);
          if (indexOfShoot >= 0 && indexOfShoot < sequenceOfTargets.length) {
            sequenceOfTargets[indexOfShoot] -= power;
            if (sequenceOfTargets[indexOfShoot] <= 0) {
              sequenceOfTargets.splice(indexOfShoot, 1);
            }
          }
          break;
        case "Add":
          let indexOfAdd = Number(command.split(" ")[1]);
          let value = Number(command.split(" ")[2]);
          if (indexOfAdd >= 0 && indexOfAdd < sequenceOfTargets.length) {
            sequenceOfTargets.splice(indexOfAdd, 0, value);
          } else {
            console.log(`Invalid placement!`);
          }
          break;
        case "Strike":
          let indexOfStrice = Number(command.split(" ")[1]);
          let radius = Number(command.split(" ")[2]);
          if (indexOfStrice >= 0 && indexOfStrice < sequenceOfTargets.length) {
            if (
              indexOfStrice - radius >= 0 &&
              indexOfStrice + radius < sequenceOfTargets.length
            ) {
              sequenceOfTargets.splice(
                indexOfStrice - radius,
                radius + radius + 1
              );
            } else {
              console.log(`Strike missed!`);
            }
          }
          break;
      }
    }

    console.log(sequenceOfTargets.join("|"));
}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]);
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"]);