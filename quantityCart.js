/****************************************
[45, 65, 45, 98];
****************************************/
const shoppingCart = [
    {name: 'Shoe', price: 1200, quantity: 2},
    {name: 'Shirt', price: 2200, quantity: 5},
    {name: 'Pant', price: 3700, quantity: 4},
    {name: 'Belt', price: 600, quantity: 3},
]; 

function totalCost(products){
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum += productTotal;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total Expense:', expense);