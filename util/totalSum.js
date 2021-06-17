export function getTotalSum(productsArray) {
  return productsArray
    .reduce((acc, product) => {
      return acc + (Number(product.price) / 100) * Number(product.quantity);
    }, 0)
    .toFixed(2);
}
