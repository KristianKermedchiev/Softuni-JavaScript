function previousDay(year, month, day) {
  let currentDate = new Date(year, month - 1, day - 1);

  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();
  console.log(`${currentYear}-${currentMonth + 1}-${currentDay}`);
}
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);