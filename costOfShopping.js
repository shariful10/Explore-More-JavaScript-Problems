/****************************************
[45, 65, 45, 98];
****************************************/
const shoppingCart = [
    {name: 'Shoe', price: 1200},
    {name: 'Shirt', price: 2200},
    {name: 'Pant', price: 3700},
    {name: 'Belt', price: 600},
]; 

function totalCost(products){
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum += product.price;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('Total Expense:', expense);