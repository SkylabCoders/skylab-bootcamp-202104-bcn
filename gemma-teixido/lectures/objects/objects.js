function generatePizzas(ingredients, size) {
  let pizza = {
    ingredients,
    size,
  };
  return pizza;
}

let orderPizza1 = generatePizzas("tomato, onion", "small");

console.log(orderPizza1);
