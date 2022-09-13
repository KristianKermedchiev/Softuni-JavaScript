function mirrorWords(input) {
  let text = input.shift();
  let pattern = /(@|#)(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Z-a-z]{3,})\1/g;

  let match = pattern.exec(text);
  let count = 0;
  let result = [];
  while (match !== null) {
    count++;

    let wordOne = match.groups.word1;
    let wordTWo = match.groups.word2;
    let reversedWord2 = wordTWo.split("").reverse().join("");

    if (wordOne === reversedWord2) {
      result.push(`${wordOne} <=> ${wordTWo}`);
    }

    match = pattern.exec(text);
  }

  if (count === 0) {
    console.log("No word pairs found!");
  } else {
    console.log(`${count} word pairs found!`);
  }

  if (result.length === 0) {
    console.log("No mirror words!");
  } else {
    console.log("The mirror words are:");
    console.log(result.join(", "));
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);