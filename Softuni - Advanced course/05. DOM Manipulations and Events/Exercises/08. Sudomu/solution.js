function solve() {
    let inputs = document.querySelectorAll("input");

    let quickChekBtn = document.getElementsByTagName("button")[0];
    let clearBtn = document.getElementsByTagName("button")[1];
    quickChekBtn.addEventListener("click", quickCheckF);
    clearBtn.addEventListener("click", clear);

    let table = document.querySelector("table");
    let rows = document.querySelectorAll("tbody tr");
    let checkPar = document.querySelectorAll("#check p")[0];

    function quickCheckF() {
        let isSolved = true;
        for (let i = 0; i < rows.length; i++) {
            let [row, col] = [new Set(), new Set()];
            for (let j = 0; j < rows.length; j++) {
                row.add(Number(rows[i].children[j].querySelector("input").value));
                col.add(Number(rows[j].children[i].querySelector("input").value));
            }
            if (row.size < rows.length || col.size < rows.length) {
                isSolved = false;
            }
        }
        table.style.border = isSolved ? "2px solid green" : "2px solid red";
        checkPar.textContent = isSolved
            ? "You solve it! Congratulations!"
            : "NOP! You are not done yet...";
        checkPar.style.color = isSolved ? "green" : "red";
    }

    function clear() {
        [...inputs].forEach((i) => (i.value = ""));
        table.style.border = "none";
        checkPar.textContent = "";
    }
}