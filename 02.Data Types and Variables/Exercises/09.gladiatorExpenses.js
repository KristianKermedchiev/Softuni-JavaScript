function gladiatorExpenses(n1, n2, n3, n4, n5) {

    let expenses = 0;
    let shield = 0;
    let loses = 0;

    for (let i = 1; i <= n1; i++) {
        loses++;

        if (loses % 2 === 0) {
            expenses += n2;
        }
        if (loses % 3 === 0) {
            expenses += n3;
        }
        if (loses % 6 === 0) {
            expenses += n4;
            shield++;
            if (shield % 2 === 0) {
                expenses += n5;
            }
        }

    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
gladiatorExpenses(7,2,3,4,5);
gladiatorExpenses(23,12.50,21.50,40,200);