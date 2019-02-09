function isPalindrome(s) {
  var noSpace = s.split(" ").join("");
  var stringReverse = noSpace.split("").reverse().join("");
  return noSpace == stringReverse;
}

module.exports = isPalindrome;
