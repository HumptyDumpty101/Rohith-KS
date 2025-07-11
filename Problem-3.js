/** 
 * Function to log first 'a' Odd Numbers if a is odd else  a-1 odd numbers
 * 
 * @param {Number}  a   First Parameter
 * @return {Number}     First a odd numbers
*/ 

function logNOddNumbers(a) {
    if (typeof a !== 'number' || a <= 0) {
        throw new Error("Input must be a positive number.");
    }
    
    let count = a % 2 === 0 ? a - 1 : a; // If 'a' is even, take a-1
    const result = [];
    for(let i =0; i< count; i++) {
        result.push(i * 2 + 1); // Generate odd numbers
    }
    console.log(result.join(', '));
    return result;
}

// TEST
// logNOddNumbers(5); // Output: 1, 3, 5, 7, 9
// logNOddNumbers(6); // Output: 1, 3, 5, 7, 9