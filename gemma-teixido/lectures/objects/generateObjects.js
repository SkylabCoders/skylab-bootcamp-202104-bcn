function generatePizzas(ingredients, size) {
  const pizza = {
    ingredients,
    size
  };
  return pizza;
}
const orderPizza1 = generatePizzas('tomato, onion', 'small');
console.log(orderPizza1);
