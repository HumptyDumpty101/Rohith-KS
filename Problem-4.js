/** 
 * Function to count multiples of numbers from 1 to 9 in an array
 * 
 * @param {Array}  arr   Input array
 * @return {Object}     Hashmap with counts of multiples
*/ 

function countMultiples(arr) {
    const result = {};

    // Initialize count
    for (let i = 1; i <= 9; i++) {
        result[i] = 0; 
    }

    for(let num of arr) {
        for(let i =1; i<=9; i++) {
            if(num%i ===0) {
                result[i]++;
            }
        }
    }

    return result;
}

// TEST
// const arr = [1,2,8,9,12,46,76,82,15,20,30];
// console.log(countMultiples(arr));