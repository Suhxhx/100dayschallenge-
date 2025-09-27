// DAY-13
// PROBLEM
// Longest Productive Streak (Brute Force Edition) 💥💻
// k = 2 📤 Expected Output: 7
function longestProductiveStreak(days, k) {
    let maxLength = 0;

    for (let i = 0; i < days.length; i++) {
        let zeroCount = 0;
        for (let j = i; j < days.length; j++) {
            if (days[j] === 0) {
                zeroCount++;
            }
            if (zeroCount <= k) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }

    return maxLength;
}
let days = [1, 0, 1, 1, 0, 0, 1, 1, 1, 0];
let k = 2;
console.log(longestProductiveStreak(days, k)); 
