function fruit(type, weight, price) {
  let weightInKg = weight / 1000;
  let result = weightInKg * price;
  console.log(
    `I need $${result.toFixed(2)} to buy ${weightInKg.toFixed(
      2
    )} kilograms ${type}.`
  );
}
fruit("orange", 2500, 1.8);
fruit("apple", 1563, 2.35);