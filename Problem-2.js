/** 
 * Function to log first N Odd Numbvers
 * 
 * @param {Number}  a   First Parameter
 * @return {Array}     First a odd numbers
*/ 

function logNOddNumbers(a) {
    if (typeof a !== 'number' || a <= 0) {
        throw new Error("Input must be a positive number.");
    }
    
    const result = [];
    for (let i = 1; result.length < a; i += 2) {
        result.push(i);
    }
    
    console.log(result.join(', '));
    return result;
}

// TEST
// logNOddNumbers(5); // Output: 1, 3, 5, 7, 9
// logNOddNumbers(10); // Output: 1, 3, 5  , 7, 9, 11, 13, 15, 17, 19
// logNOddNumbers(0); // Throws error

