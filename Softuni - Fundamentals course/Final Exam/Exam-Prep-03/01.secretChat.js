function secretChat(input) {
  let message = input.shift();

  let line = input.shift();

  while (line !== "Reveal") {
    if (line.includes("InsertSpace")) {
      let [command, index] = line.split(":|:");

      let first = message.slice(0, index);
      let last = message.slice(index);

      message = first + " " + last;

      console.log(message);
    } else if (line.includes("Reverse")) {
      let [command, string] = line.split(":|:");

      if (message.includes(string)) {
        let temp = Array.from(string);
        message = message.replace(string, "");
        let reverse = temp.reverse();
        message = message + reverse.join("");
        console.log(message);
      } else {
        console.log(`error`);
      }
    } else if (line.includes("ChangeAll")) {
      let [command, old, newString] = line.split(":|:");
      message = message.split(old).join(newString);
      console.log(message);
    }

    line = input.shift();
  }

  console.log(`You have a new text message: ${message}`);
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);