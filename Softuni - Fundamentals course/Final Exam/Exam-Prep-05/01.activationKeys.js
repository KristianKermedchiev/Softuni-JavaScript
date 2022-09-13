function activationKeys(input) {
  let rawKey = input.shift();

  let line = input.shift();

  while (line !== "Generate") {
    let action = line.split(">>>");

    let command = action[0];

    if (command === "Contains") {
      let substring = action[1];
      if (rawKey.includes(substring)) {
        console.log(`${rawKey} contains ${substring}`);
      } else {
        console.log(`Substring not found!`);
      }
    } else if (command === "Flip") {
      let caseDirection = action[1];
      let start = action[2];
      let end = action[3];
      if (caseDirection === "Upper") {
        let temp = rawKey.slice(start, end);
        rawKey = rawKey.replace(temp, temp.toUpperCase());
        console.log(rawKey);
      } else {
        let temp = rawKey.slice(start, end);
        rawKey = rawKey.replace(temp, temp.toLowerCase());
        console.log(rawKey);
      }
    } else if (command === "Slice") {
      let start = action[1];
      let end = action[2];
      let temp = rawKey.slice(start, end);
      rawKey = rawKey.replace(temp, "");
      console.log(rawKey);
    }

    line = input.shift();
  }

  console.log(`Your activation key is: ${rawKey}`);
}
activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
activationKeys([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
