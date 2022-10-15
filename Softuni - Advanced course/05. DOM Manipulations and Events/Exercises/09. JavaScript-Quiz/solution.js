function solve() {
  let correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];
  let rightClick = 0;
  let index = 0;

  let result = document.querySelector("#results");
  let resH = document.querySelector("#results h1");

  Array.from(document.getElementsByClassName("answer-text")).map((x) =>
    x.addEventListener("click", answerClick)
  );

  function answerClick(event) {
    if (correctAnswers.includes(event.target.textContent)) {
      rightClick++;
    }

    let currSection = document.querySelectorAll("section")[index];
    currSection.style.display = "none";

    if (document.querySelectorAll("section")[index + 1]) {
      let nextSection = document.querySelectorAll("section")[index + 1];
      nextSection.style.display = "block";
      index++;
    } else {
      result.style.display = "block";

      rightClick === 3
        ? (resH.innerHTML = "You are recognized as top JavaScript fan!")
        : (resH.innerHTML = `You have ${rightClick} right answers`);
    }
  }
}
