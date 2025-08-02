// // DAY 01 PROBLEMS 

// ✂️ 1.Remove Discontinued Products
let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch'];
products.splice(2, 2);
console.log("products are", products);

// ➕ 2. Add New Students in Between
let students = ['Ali', 'Sara', 'Zoya'];
students.splice(1,0, 'nina', 'omar');
console.log("new students are", students);

//// 🧪 3. Extract Top Performers
let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
let topprofermers = scores.slice(0, 3);
console.log("top performers are", topprofermers);

//// 📅 4. Show Last 2 Days’ Sales
let sales = [220, 300, 280, 150, 400, 390, 310];
let sales1 = sales.slice(-2);
console.log("last 2 days sales", sales1);

//🚿 5. Get All Users Who Are
let users = [
  {name: 'Ahmed', active: true},
  {name: 'Mira', active: false},
  {name: 'John', active: true},
];
let activeUsers = users.filter(user => user.active);
console.log("active users are", activeUsers);

//📞 6. Block Short Phone Numbers
let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
let validNumbers = phoneNumbers.filter(num => num.length >= 10);
console.log("valid numbers are", validNumbers);

//🧾 7. Convert Price to With Tax
let prices = [100, 200, 300];
let tax = prices.map(price => price * 1.18);
console.log("after adding tax ", tax);

//💼 8. Append “.com” to Website Names
let sites = ['google', 'amazon', 'microsoft'];
let domains = sites.map(site => site + ".com");
console.log("after adding the .com to sites", domains);

//📊 9. Calculate Total Cart Price
let cart = [499, 1299, 299, 799];
let total = cart.reduce((sum, price) => sum + price, 0);
console.log("total amount is", total);

// 🎟️ 10. Count Frequency of Votes
let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let voteCount = votes.reduce((acc, name) => {
  acc[name] = (acc[name] || 0) + 1;
  return acc;
}, {});
console.log("higher voter are", voteCount);