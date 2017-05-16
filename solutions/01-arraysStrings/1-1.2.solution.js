// Check if one string is a permutation of another
// I: two strings
// O: true/false
// C: 
// E:

// Naive solution: count all the letters in the first string and the second string
// Compare the values and see if they're equal
// We can do a preliminary check: if the strings' lengths are unequal, return false
// Runtime Analysis: O(n) where n is length of str1 
// (doesn't include length of str2 as str1.length === str2.length)

function isPermutation(str1, str2) {
  if (str1.length !== str2.length ) {
    return false;
  }

  var length = str1.length;

  var counts1 = getLetterCounts(str1);
  var counts2 = getLetterCounts(str2);

  for (let char in counts1) {
    if (counts1.hasOwnProperty(char)) {
      if (counts2[char] !== counts1[char]) {
        return false;
      }
    }
  }
  return true;
}

function getLetterCounts(str) {
  var counts = {};

  for (let i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    if (counts.hasOwnProperty(char)) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}