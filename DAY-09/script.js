// DAY-09 PROBLEMS
// ✅ Q1. Remove Duplicate Emails (Like Gmail cleanup)
function removeDuplicateEmails(emails) {
  if (emails.length === 0) return [];
  let uniqueIndex = 0; 
  for (let i = 1; i < emails.length; i++) {
    if (emails[i] !== emails[uniqueIndex]) {
      uniqueIndex++;
      emails[uniqueIndex] = emails[i];
    }
  }
  return emails.slice(0, uniqueIndex + 1);
}
let emails = ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"];
let cleanedEmails = removeDuplicateEmails(emails);
console.log(cleanedEmails);

// ✅ Q2. Playlist Duration Matcher (Music App Feature)

function findPlaylistPair(songs, targetDuration) {
  songs.sort((a, b) => a - b);
  let left = 0;
  let right = songs.length - 1;
  while (left < right) {
    let sum = songs[left] + songs[right];
    if (sum === targetDuration) {
      return [songs[left], songs[right]]; 
    } else if (sum < targetDuration) {
      left++; 
    } else {
      right--; 
    }
  }
  return null;
}
let songs = [3, 5, 8, 2, 7, 4];
let targetDuration = 10;
let result = findPlaylistPair(songs, targetDuration);
console.log(result);
