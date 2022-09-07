function bonusScoringSystem (input){

    let stutents = input.shift();
    let lectures = input.shift();
    let additionalBonus = input.shift();
    
    let bestStudent = 0;
    let attendedLectures = 0;

    for (let i = 0; i < stutents; i++) {

        
        let attendance  = Number(input.shift());

        let bonus = Math.round(attendance / Number(lectures) * (5 + Number(additionalBonus)));

         if(bonus >= bestStudent){
            bestStudent = bonus;
            attendedLectures = attendance;
         }
    }
    console.log(`Max Bonus: ${bestStudent}.`);
    console.log(`The student has attended ${attendedLectures} lectures.`);
}
bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20']);
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18']);