// day-11 
// problems
// two pointer technique
// Find All Unique Triplets That Sum to Zero
// 📤 Expected Output:
// [[-1, -1, 2], [-1, 0, 1]]
function threeSumZero(arr) {
  arr.sort((a, b) => a - b); // Step 1: Sort the array
  let result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    // Skip duplicates for the first element
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === 0) {
        result.push([arr[i], arr[left], arr[right]]);

        // Skip duplicates for left and right
        while (left < right && arr[left] === arr[left + 1]) left++;
        while (left < right && arr[right] === arr[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++; // Need a bigger number
      } else {
        right--; // Need a smaller number
      }
    }
  }

  return result;
}
let arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSumZero(arr)); // Output: [[-1, -1, 2], [-1, 0, 1]]