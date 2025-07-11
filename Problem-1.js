/** 
 * Class that acts like a calculator
 * 
 * @param {Number}  a   First Parameter
 * @param {Number}  b   Second Parameter
 * @param {String}  operation   Type of Operation to be perforemd
 * @return {Number}     Result of operation
*/ 


class Calculator {
    calculate(a,b, operation) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch(operation){
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b === 0) {
                    throw new Error("Division by zero is not allowed.");
                }
                return a / b;
            default:
                throw new Error("Invalid operation");
        }
    }
}

// TEST
// const calc = new Calculator();
// console.log(calc.calculate(10, 5, '+')); // 15
// console.log(calc.calculate(10, 5, '-')); // 5
// console.log(calc.calculate(10, 5, '*')); // 50
// console.log(calc.calculate(10, 5, '/')); // 2

