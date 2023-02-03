function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = [];
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);
var p3 = pizzaOven("hand tossed", "BBQ", "mozzarella", ["chicken, green peppers, jalapenos "]);
console.log(p3);
var p4 = pizzaOven("thin crust", "traditional", "mozzarella");
console.log(p4);



var crustType = ["deep dish", "hand tossed", "thin crust"];
var sauceType = ["traditional", "marinara", "BBQ"];
var cheeses = ["mozzarella", "feta", "three-cheese blend"];
var toppings = ["pepperoni", "sausages", "mushrooms", "olives", "onions", "green peppers", "jalapenos", "chicken"];

function randomPick(arr) {
    var i = Math.floor(arr.length*Math.random())
    return arr[i];
} 

function randomPizza(){
    var pizza = {}
    pizza.crustType = randomPick(crustType);
    pizza.sauceType = randomPick(sauceType);
    pizza.cheeses = randomPick(cheeses);
    pizza.toppings = randomPick(toppings);
    return pizza;
}

console.log(randomPizza())