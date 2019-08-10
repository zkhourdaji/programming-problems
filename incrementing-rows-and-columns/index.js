function final(r, c, i) {
    let matrix = initializeMatrix(r, c);
    i.forEach(operation => {
        const index = +operation[0];
        const rowOrCol = operation[1];
        switch (rowOrCol) {
            case 'r':
                matrix = incrementRow(matrix,index);
                break;
            case 'c':
                matrix = incrementCol(matrix,index);
                break;
        }
    });
    printMatrix(matrix);

}

function printMatrix(matrix){
    matrix.forEach(row => console.log(row));
}
function incrementRow(matrix, rowIndex){
    const row = matrix[rowIndex];
    for(let i = 0; i < row.length; i++){
        row[i]++;
    }
    return matrix;
}

function incrementCol(matrix, colIndex){
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (j === colIndex){
                matrix[i][j]++;
            }
        }
    }
    return matrix;
}

function initializeMatrix(rows, columns) {
    const matrix = [];
    // for each row
    for (let i = 0; i < rows; i++) {
        // push a new array
        matrix.push([]);
        // for each column
        for (let j = 0; j < columns; j++) {
            // push a 0
            matrix[i].push(0);
        }
    }
    return matrix;
}

// final(4,5, ["2r", "1c"]);