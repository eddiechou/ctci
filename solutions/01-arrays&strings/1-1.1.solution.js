// Determine if string has all unique characters. What if you cannot use additional Data Structures?

// O(n) time, O(n) space
function isUnique(string) {
  // Keep counts
  var counts = {};

  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    if (counts.hasOwnProperty(char)) {
      counts[char] = counts[char] + 1;
    } else {
      counts[char] = 1;
    }
  }

  for (let char in counts) {
    if (counts[char] > 1) {
      return false;
    }
  }
  return true;
}


// No additional DS, O(n^2) time, O(1) space
function isUniqueSlow(string) {
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string.charAt(i) === string.charAt(j)) {
        return false;
      }
    }
  }
  return true;
}