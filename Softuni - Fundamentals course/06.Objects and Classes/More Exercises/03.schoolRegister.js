function school(input){

    let students = {};

    for (let line of input){
        let tokens = line.split(', ');
        let grade = Number(tokens[1].split(': ')[1]) + 1;
        let name = tokens[0].split(': ')[1];
        let score = Number(tokens[2].split(': ')[1]);
        if (score > 3) {
            let student = {name, score};
            if (!students.hasOwnProperty(grade)) {
                students[grade] = [];
            }
            students[grade].push(student);
        }
    }
        let sortedGrades = Object.keys(students).sort((a,b) => a - b);
        for (let grade of sortedGrades) {
        let studentsCount = students[grade];
        console.log(`${grade} Grade`);
        console.log(`List of students: ${studentsCount.map(s => s.name).join(', ')}`);
        console.log(`Average annual score from last year: ${average(studentsCount.map(s => s.score)).toFixed(2)}`);
        console.log();
    }

    function average(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }

}
school([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
);
school([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
);