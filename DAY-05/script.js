// DAY-05
// 🔎 Problem 1: Separate Phone Numbers
const phoneNumbers = [
  "+919876543210",
  "+14085551234",
  "+918888777666",
  "+12345678901",
  "+917654321098"
];
const separatePhoneNumbers = (nums) => ({
  indianNumbers: nums.filter(n => n.startsWith("+91")),
  usNumbers: nums.filter(n => n.startsWith("+1") && !n.startsWith("+91"))
});
const result = separatePhoneNumbers(phoneNumbers);
console.log(result);

// ✨ Problem 2: Insert Product in Cart
let cart = [101, 102, 104];
let newProduct = 103;
cart.splice(1, 0, newProduct); 
console.log(cart); 

//problem-03: Insert Student in Waiting List
let waiting = ["Ali", "John", "Sara"];
let newStudent = "Aarav";
waiting.push(newStudent);
console.log(waiting);

