export const splitQueryStringIntoArray = (queryString) => queryString.splite('-');

export const filterProductsByKey = (productList, key) => productList.filter(
  (product) => product.name.includes(key)
);

export const filterProductsByKeyList = (productList, keyList) => {
  let filteredProducts = [];
  keyList.forEach((key) => {
    const result = filterProductsByKey(productList, key);
    filteredProducts = [...filteredProducts, result];
  });

  return filteredProducts;
};
