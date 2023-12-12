function totalSales(products, taxRate) {
  const tot = products.reduce((sum, product) => {
    product.totalSales = product.quantity * product.price;
    return sum + product.totalSales;
  }, 0);

  return (tot + tot * (taxRate / 100)).toFixed(2);
}
console.log(
  totalSales(
    [
      { quantity: 10, price: 10 },
      { quantity: 5, price: 5 },
      { quantity: 6, price: 5 },
    ],
    8
  )
);
