function shootForTheWin(input) {

    let sequence = input.shift().split(' ').map(Number);
    let command = input.shift();
    let count = 0;
    
    while(command !== 'End'){

        if(sequence[command] !== -1 && command < sequence.length){
            let temp = sequence[command];

            for (let i = 0; i < sequence.length; i++) {
                
                
                if(sequence[command] !== -1){
                    sequence[command] = -1;
                    count++;
                }
    
                if(sequence[i] !== -1){
                    if(sequence[i] > temp){
                        sequence[i] -= temp;
                    } else {
                        sequence[i] +=temp;
                    }
                }
                
            }
        }
        
        command = input.shift();
    }
    console.log(`Shot targets: ${count} -> ${sequence.join(' ')}`);
}
shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]);
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]);
