// DAY=-10 PROBLEMS
// 01 
function mergeSchedules(userA, userB) {
  let a = 0;
  let b = 0;
   let allSlots = [];
  while (a < userA.length && b < userB.length) {
    if (userA[a][0] < userB[b][0]) {
      allSlots.push(userA[a]);
      a++;
    } else {
      allSlots.push(userB[b]);
      b++;
    }
  }
  while (a < userA.length) {
    allSlots.push(userA[a]);
    a++;
  }
  while (b < userB.length) {
    allSlots.push(userB[b]);
    b++;
  }
  let result = [];
  let start = allSlots[0][0];
  let end = allSlots[0][1];

  for (let i = 1; i < allSlots.length; i++) {
    let [currStart, currEnd] = allSlots[i];

    if (currStart <= end) {
      end = Math.max(end, currEnd);
    } else {
      result.push([start, end]);
      start = currStart;
      end = currEnd;
    }
  }
  result.push([start, end]);
  return result;
}
console.log(mergeSchedules(
  [[9, 11], [13, 15], [18, 20]],
  [[10, 12], [14, 16], [17, 18]]
));
