function searchForANum (nums,criteria){
    let count = 0;

    let el = criteria[2];

    let arr = nums.slice(0,criteria[0]);

    arr.splice(0,criteria[1]);

    for(let i = 0;i<arr.length;i++){
  
        if(arr[i] === (el)){
            count++;
         }
    }
console.log(`Number ${el} occurs ${count} times.`)
}
searchForANum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    );
searchForANum([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    );