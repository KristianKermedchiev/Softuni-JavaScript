function emojiDetector(input) {
  let text = input[0];
  let coolPoints = 1;

  let patternEmoji = /(\*|:){2}(?<emoji>[A-Z{1}][a-z]{2,})\1{2}/g;
  let digitPattern = /\d/g;

  let regex = patternEmoji.exec(text);

  let myArr = [];

  let myfullArray = [];

  let numRegex = digitPattern.exec(text);

  while (regex !== null) {
    myArr.push(regex.groups.emoji);
    myfullArray.push(regex[0]);
    regex = patternEmoji.exec(text);
  }

  while (numRegex !== null) {
    coolPoints = coolPoints * Number(numRegex);
    numRegex = digitPattern.exec(text);
  }

  let goodPoints = 0;

  let finalArray = [];

  for (let y = 0; y < myfullArray.length; y++) {
    let temp = myfullArray[y].slice(2, -2);

    for (let i = 0; i < temp.length; i++) {
      goodPoints += temp[i].charCodeAt();
    }

    if (goodPoints > coolPoints) {
      finalArray.push(myfullArray[y]);
    }
    goodPoints = 0;
  }

  console.log(`Cool threshold: ${coolPoints}`);
  console.log(`${myArr.length} emojis found in the text. The cool ones are:`);

  for (let el of finalArray) {
    console.log(`${el}`);
  }
}
emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
emojiDetector([
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
]);