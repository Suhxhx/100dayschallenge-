// DAY 06 PROBLEMS

// 🛒 Q1. Add Product to Cart
let cart1 = [101, 102, 103, 104];
let newProduct = 105;
cart1.push(newProduct);
console.log(cart1);

// 🧼 Q2. Remove Sold Out Item
let cart2 = [101, 102, 103, 104];
cart2 = cart2.filter(id => id !== 103);
console.log(cart2);


// 📍 Q3. Insert at Specific Position
let fruits = ["apple", "orange", "grapes"];
fruits.splice(2, 0, "banana");
console.log(fruits);

// 🔁 Q4. Print All Students
let students = ["Ali", "Zara", "John"];
students.forEach(function(student) {
  console.log(`Hello, ${student}!`);
});

// 📦 Q5. Delete First Item from Queue
let orders = ["order1", "order2", "order3"];
orders.shift();
console.log(orders);
