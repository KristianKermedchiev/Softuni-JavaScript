function colorize() {
    let rows = document.getElementsByTagName('tr');

    for(let i = 1; i < rows.length; i++){
        let row = rows[i];
            if(i % 2 !== 0){
            row.style.background = "teal";
        }
    }
}