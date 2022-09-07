function softUniReception (array){

    let studentCount = array.pop();
    let studentsPerHour = Number(array[0]) + Number(array[1]) + Number(array[2]);
    let hours = 0;
    let breaks = 0;

    for (let i = 1; studentCount > 0; i++) {
    
        if(i % 4 !== 0){
            hours++;
            studentCount = studentCount - studentsPerHour;
        } else {
            breaks++
        }
    }
    console.log(`Time needed: ${hours+ breaks}h.`);
}
softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);