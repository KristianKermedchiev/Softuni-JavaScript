function sortByTwoCriteria (array){

    let sortedArray = array.sort((a,b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    sortedArray.forEach(element => {
        console.log(element);
    });


}
sortByTwoCriteria(['alpha', 'beta', 'gamma'])
sortByTwoCriteria(	['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])