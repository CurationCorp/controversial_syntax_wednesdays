module.exports = function findLargestOneSequence(n) {
  // return 0 if 0 or negative
  if (n <= 0) return 0;
  
  // convert to binary
  let binary = n.toString(2);
  // split into array of strings of 1's and remove any empty strings
  let oneStrings = binary.split("0").filter(x => x.length > 0)
  // return the length of longest string of 1's
  let result = oneStrings.reduce((prev, curr) => {
    if (curr.length > prev) {
      return curr.length;
    } else {
      return prev;
    }
  }, 0);
  return result;
};
