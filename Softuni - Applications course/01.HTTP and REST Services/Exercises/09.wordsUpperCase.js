function wordsUpperCase(input) {
  console.log(input.match(/\w+/g).join(", ").toUpperCase());
}
wordsUpperCase("Hi, how are you?");
wordsUpperCase("hello");