function roadRadar(speed, area) {
  let speedLimit;

  switch (area) {
    case "residential":
      speedLimit = 20;

      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (speed > speedLimit && speed <= speedLimit + 20) {
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - speeding`
        );
      } else if (speed > speedLimit && speed <= speedLimit + 40) {
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - excessive speeding`
        );
      } else if (speed >= speedLimit + 40) {
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - reckless driving`
        );
      }
      break;
    case "city":
      speedLimit = 50;

      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (speed > speedLimit && speed <= speedLimit + 20) {
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - speeding`
        );
      } else if (speed > speedLimit && speed <= speedLimit + 40) {
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - excessive speeding`
        );
      } else if (speed >= speedLimit + 40) {
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - reckless driving`
        );
      }
      break;
    case "interstate":
      speedLimit = 90;

      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (speed > speedLimit && speed <= speedLimit + 20) {
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - speeding`
        );
      } else if (speed > speedLimit && speed <= speedLimit + 40) {
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - excessive speeding`
        );
      } else if (speed >= speedLimit + 40) {
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - reckless driving`
        );
      }
      break;
    case "motorway":
      speedLimit = 130;

      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (speed > speedLimit && speed <= speedLimit + 20) {
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - speeding`
        );
      } else if (speed > speedLimit && speed <= speedLimit + 40) {
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - excessive speeding`
        );
      } else if (speed >= speedLimit + 40) {
        console.log(
          `The speed is ${
            speed - speedLimit
          } km/h faster than the allowed speed of ${speedLimit} - reckless driving`
        );
      }
      break;
  }
}
roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");