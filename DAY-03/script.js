// 🧠 1. Detect and Merge Duplicate Product Entries (Advanced Cleanup)
let inventory = [
  { id: 101, name: 'Laptop' },
  { id: 102, name: 'Mobile' },
  { id: 103, name: 'laptop' },
  { id: 104, name: 'Tablet' },
  { id: 105, name: 'MOBILE' },
  { id: 106, name: 'Camera' }
];


let list = [];
let cleanedInventory = inventory.filter(item => {
  let lowerName = item.name.toLowerCase();
  if (!list.includes(lowerName)) {
    list.push(lowerName);
    return true;
  }
  return false;
});

console.log(cleanedInventory);

// 🧠 2. Group Transactions by Category and Sum Amounts
let Transactions = [
  { category: 'Food', amount: 120 },
  { category: 'Transport', amount: 50 },
  { category: 'Food', amount: 80 },
  { category: 'Shopping', amount: 300 },
  { category: 'Transport', amount: 70 },
];
let Group = Transactions.reduce((acc,{category, amount}) => {
     acc[category] = (acc[category] || 0) + amount;
  return acc;
}, {});
console.log(Group);