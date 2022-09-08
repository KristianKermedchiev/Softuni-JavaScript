function adAstra(input) {
  let text = input.shift();
  let pattern =
    /([#|])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
  let match = pattern.exec(text);
  let myObj = [];
  let kcal = 0;

  while (match) {
    let name = match.groups.name;
    let date = match.groups.date;
    let cal = match.groups.calories;
    myObj.push({ item: name, day: date, calories: cal });
    kcal += Number(cal);
    match = pattern.exec(text);
  }

  console.log(
    `You have food to last you for: ${Math.floor(kcal / 2000)} days!`
  );

  for (let i = 0; i < myObj.length; i++) {
    console.log(
      `Item: ${myObj[i].item}, Best before: ${myObj[i].day}, Nutrition: ${myObj[i].calories}`
    );
  }
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);