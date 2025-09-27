// DAY-12
// PROBLEM 
// Sliding Window Begins! 
//  Maximum Sum of K Consecutive Elements (Brute-Force Only)
// 📤 Expected Output: 180
function maxKSum(visits, k) {
  let maxSum = 0;

  for (let i = 0; i <= visits.length - k; i++) {
    let currentSum = 0;
    for (let j = i; j < i + k; j++) {
      currentSum += visits[j];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}
let visits = [10, 20, 30, 40, 50, 60, 70];
let k = 3;
console.log(maxKSum(visits, k)); 