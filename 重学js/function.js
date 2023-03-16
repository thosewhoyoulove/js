/**
 * 函数作为值
 * 
 */
const add = (x, y) => x + y
const subtract = (x, y) => x - y
const multiply = (x, y) => x * y
const divide = (x, y) => x / y
const operate = (operator, operand1, operand2) => {
    return operator(operand1, operand2)
}
let i = operate(add, operate(add, 2, 3), operate(multiply, 5, 6))
console.log(i)
    //优化：将操作放到对象的字面量中
const operators = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
    pow: Math.pow
}
const operate2 = (operation, operand1, operand2) => {
    if (typeof operators[operation] === 'function') {
        console.log(operators[operation](operand1, operand2))
    } else throw new TypeError('unknown operator')
}
operate2('add', 1, 2)