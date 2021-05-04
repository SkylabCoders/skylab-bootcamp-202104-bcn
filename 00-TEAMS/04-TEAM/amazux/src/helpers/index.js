export const splitQueryStringIntoArray = (queryString) => queryString.split('-');

export const filterProductsByKey = (productList, key) => productList.filter(
  (product) => product.name.toLowerCase().includes(key)
);

export const filterProductsByKeyList = (productList, keyList) => {
  const filteredProducts = [];
  keyList.forEach((key) => {
    const result = filterProductsByKey(productList, key);
    filteredProducts.push(result);
  });

  return filteredProducts;
};
