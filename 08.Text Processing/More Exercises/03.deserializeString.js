function deserialize(input) {

    let myCopy = input.slice();

    let sum = 0;

    while(myCopy[0] !== 'end'){
        let myFirstArr = myCopy.shift().split(':');
        let myFirstLet = myFirstArr[0];
        let myFirstNums = myFirstArr[1].split('/');
        sum += myFirstNums.length;

    }
    
    let myArr = [];
    myArr.length = sum - 1;

    while (input[0] !== 'end') {
        let myFirstArr = input.shift().split(':');
        let myFirstLet = myFirstArr[0];
        let myFirstNums = myFirstArr[1].split('/');

        for(let el of myFirstNums){
            if(myArr.length < el){
                myArr.push(myFirstLet);
            }
            else {
                myArr.splice(el, 1, myFirstLet);
            }           
        }     
    }
    
    console.log(myArr.join(''));

}
deserialize(['a:0/2/4/6',
'b:1/3/5',
'end']
);
deserialize(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']
);