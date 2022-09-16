function equalNeighbours(matrix) {
    let neighbors = 0;
    for (let row = 0; row < matrix.length; row++) {
        
        for (let col = 0; col < matrix[row].length; col++) {
            let temp1 = matrix[row];
            if (row < matrix.length-1) {
                let temp2 = row;
                let temp3 = matrix[row][col];
                let temp4 = matrix[row + 1][col];
                if (matrix[row][col] == matrix[row + 1][col]) {
                    neighbors++;
                }
            }
            if(col<matrix[row].length) {
                if (matrix[row][col] == matrix[row][col + 1]) {
                    neighbors++;
                }
            }
        }
    }
    return neighbors;
}
console.log(equalNeighbours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));
console.log(equalNeighbours([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));