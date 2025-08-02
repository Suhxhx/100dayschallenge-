//  DAY 07 PROBLEMS

// 🔹 1. Insert New Delivery Order
let orders = [
  { orderId: 1, deliveryTime: "12:00" },
  { orderId: 2, deliveryTime: "12:30" }
];

let newOrder = { orderId: 3, deliveryTime: "12:15" };
let insertIndex = orders.findIndex(order => order.deliveryTime > newOrder.deliveryTime);
if (insertIndex === -1) {
  orders.push(newOrder);
} else {
  orders.splice(insertIndex, 0, newOrder);
}

console.log(orders);

// 🔹 2. Remove Inactive Users 
let users = [
  { username: "ali", isActive: true },
  { username: "sara", isActive: false },
  { username: "john", isActive: true }
];
let activeUsers = users.filter(user => user.isActive);

console.log(activeUsers);

// 🔹 3. Movie Pair Watch Time
function twoPointer(arr,target){
    arr.sort((a,b)=>a-b);
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let sum=arr[left]+arr[right];
        if(sum===target){
            return [arr[left],arr[right]];
        }else if(sum<target){
            left++;
        }else{
            right--;
        }
    }
    return 'No exact pair found';
}
console.log(twoPointer([90, 85, 75, 60, 120, 150, 125],250))
