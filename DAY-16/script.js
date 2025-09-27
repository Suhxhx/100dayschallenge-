// DAY-16
// PROBLEM
//  Count Occurrences of Anagrams
// Given a string txt and a pattern string pat, your task is to count how many times an anagram of pat appears in txt as a substring.
function countAnagrams(txt, pat) {
    let count = 0;
    let patLength = pat.length;
    for (let i = 0; i <= txt.length - patLength; i++) {
        let sub = txt.substring(i, i + patLength);
        if (isAnagram(sub, pat)) {
            count++;
        }
    }
    return count;
}
function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
let txt = "forxxorfxdofr";
let pat = "for";
console.log(countAnagrams(txt, pat));
