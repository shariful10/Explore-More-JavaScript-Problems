function add(num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}
const result = add(12, 45);
// console.log(result);

function multifly(num1, num2){
    return num1 * num2;
}

const output = multifly(12, 45);
console.log(output);