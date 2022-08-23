function requiredReading(arg1, arg2, arg3) {
    let pages = Number(arg1);
    let readInOneHouse = Number(arg2);
    let days = Number(arg3);

    let totalTime = pages / readInOneHouse;
    let requiredHours = totalTime / days

    console.log(requiredHours);
}
requiredReading(212, 20, 2);
requiredReading(432, 15, 4);