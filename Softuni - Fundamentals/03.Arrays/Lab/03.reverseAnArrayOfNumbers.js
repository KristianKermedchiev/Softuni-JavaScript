function reverseAnArrayOfNumbers(n, number) {

        let res = [];
        let string = '';
        let index = '';

        for(let i = 0; i< n; i++){
            res.push(number[i]);
        }
        
        for(let r = res.length -1 ; r >= 0; r--){   
            string += res[r] + " ";
        }
        console.log(string)
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])