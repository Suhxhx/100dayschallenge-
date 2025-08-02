// DAY 02 Problems 

// 🧾 1. Generate Invoice Report  
let items = [
  { name: "Pen", qty: 3, price: 10 },
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Bag", qty: 1, price: 400 }
];
let invoice = items.map(item => ({
  name: item.name,
  total: item.qty * item.price
}));
console.log("total quantities are ", invoice);

// 🧠 2. Detect Duplicate Entries 
let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];
let DuplicateEntries =  users.filter((Name, index, arr) => 
arr.indexOf(Name) !== arr.lastIndexOf(Name) &&
arr.indexOf(Name) === index);
console.log("Duplicate Entries are", DuplicateEntries);


//📈 3. Find Most Sold Product
let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];
let productTotals = orders.reduce((acc, order) => {
  acc[order.product] = (acc[order.product] || 0) + order.qty;
  return acc;
}, {});
let mostSold = Object.keys(productTotals).reduce((maxProduct, currentProduct) => {
  return productTotals[currentProduct] > productTotals[maxProduct] ? currentProduct : maxProduct;
});
console.log("most Sold product is", mostSold); 

