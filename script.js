'use strict'
function reverseOnDiagonals(matrix) {
	let size = matrix.length;
	for (let i = 0; i < size/2; i++) {
		let temp = matrix[i][i];
		matrix[i][i] = matrix[size-i-1][size-i-1];
        matrix[size-i-1][size-i-1] = temp;
        temp = matrix[size-i-1][i];
        matrix[size-i-1][i] = matrix[i][size-i-1];
        matrix[i][size-i-1] = temp;	
	}
	for (let i = 0; i < size; i++) {
		if (i !== size - 1) {
	    	document.write(matrix[i]);
	    	document.write('<br>');
	    }
	   	else
	    	document.write(matrix[i]);
	}
}

reverseOnDiagonals([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);