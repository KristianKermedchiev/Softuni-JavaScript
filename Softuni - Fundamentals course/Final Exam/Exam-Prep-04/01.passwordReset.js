function passwordReset(input) {
  let message = input.shift();

  let line = input.shift();

  let temporal = "icecream::hot::summer";

  while (line !== "Done") {
    if (line.includes("TakeOdd")) {
      let newMessage = [];
      for (let i = 0; i < message.length; i++) {
        if (i % 2 !== 0 && i !== 0) {
          newMessage.push(message[i]);
        }
      }
      message = newMessage.join("");

      console.log(message);
    } else if (line.includes("Cut")) {
      let [command, index, length] = line.split(" ");

      let first = Number(index);
      let last = Number(index) + Number(length);
      let temp = message.slice(first, last);
      message = message.replace(temp, "");
      console.log(message);
    } else if (line.includes("Substitute ")) {
      let [command, substring, substitute] = line.split(" ");
      if (message.includes(substring)) {
        while (message.includes(substring)) {
          message = message.replace(substring, substitute);
        }
        console.log(message);
      } else {
        console.log(`Nothing to replace!`);
      }
    }

    line = input.shift();
  }

  console.log(`Your password is: ${message}`);
}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
passwordReset([
  "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done",
]);