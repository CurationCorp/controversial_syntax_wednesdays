module.exports = function findLargestOneSequence(n) {
  if (n <= 0) return 0;
  const binary = n.toString(2);
  const setOfOnesStrings = binary.split('0').filter(a => a !== '');
  const result = setOfOnesStrings.reduce((previous, current) => {
    if (current.length > previous) {
      return current.length;
    }
    return previous;
  }, 0);
  return result;
};
