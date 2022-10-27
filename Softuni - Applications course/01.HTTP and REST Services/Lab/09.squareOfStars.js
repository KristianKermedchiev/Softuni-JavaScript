function squareOfStars(input) {
  let symbol = "* ";

  for (let i = 0; i < input; i++) {
    let row = symbol.repeat(input);
    console.log(row);
  }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(3);
squareOfStars(4);
squareOfStars(5);
squareOfStars(10);