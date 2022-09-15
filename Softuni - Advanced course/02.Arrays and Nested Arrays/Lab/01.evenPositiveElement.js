function evenPositiveElement(input) {
  let buff = " ";
  for (let i = 0; i < input.length; i += 2) {
    buff += input[i] + " ";
  }
  console.log(buff);
}
evenPositiveElement(["20", "30", "40", "50", "60"]);
evenPositiveElement(["5", "10"]);