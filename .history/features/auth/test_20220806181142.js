// them doanh thu cho tung shop
var shop = [
  { shopId: 1, shopName: 'tiki', income: '0' },
  { shopId: 2, shopName: 'lazada', income: '0' },
  { shopId: 3, shopName: 'shope', income: '0' },
];
var listProduct = [
  { productId: 1, shopId: 2, productName: 'ao so mi', price: 300000 },
  { productId: 2, shopId: 3, productName: 'ao khoac', price: 800000 },
  { productId: 3, shopId: 1, productName: 'quan bo', price: 400000 },
  { productId: 4, shopId: 2, productName: 'quan bo', price: 500000 },
  { productId: 5, shopId: 3, productName: 'quan bo', price: 200000 },
  { productId: 6, shopId: 1, productName: 'quan bo', price: 1000000 },
];
// tinh tong tien

var order = [
  {
    orderId: 1,
    total: 0,
    listProduct: [
      { productId: 1, quantity: 3 },
      { productId: 6, quantity: 1 },
    ],
  },
  {
    orderId: 2,
    total: 0,
    listProduct: [
      { productId: 2, quantity: 1 },
      { productId: 5, quantity: 5 },
    ],
  },
].map((item) => {
  const sum = item.listProduct.map((productOrder) => {
    const findPrice = listProduct.filter((x) => x.productId === productOrder.productId);
    return productOrder.quantity * findPrice[0].price;
  });
  const total = sum.reduce((a, b) => a + b, 0);
  return { ...item, total: total };
});

const arr = order.map((product) => {
  return product.listProduct
})
const arr2 = shop.filter((income) => {
  const res2= arr.flat().map((product) => {
  listProduct.map((productOrder) => {
    if(productOrder.productId === product.productId && productOrder.shopId === income.shopId){
      const total = productOrder.price * product.quantity
      return { ...income, income: total };
    }
   })
   return res2
})
})
console.log(arr2)
