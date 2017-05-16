// [1.9] isRotation

// Checks if s2 is a rotation of s1 using only 1 call to isSubstring 
// O(n) space, where n is the length of s2
// O(n) time, where n is the length of s2 (assumes indexOf is O(s1.length + s2.length))
function isRotation(s1, s2) {
  // concat s2 with itself and check if s1 is in it
  var s3 = s2.concat(s2);
  return s3.indexOf(s1) !== -1;
}