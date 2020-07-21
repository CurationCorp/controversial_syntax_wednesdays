module.exports = function findLargestOneSequence(n) {
  if (n < 1) return 0;
  return test(n.toString(2), "1".repeat(n.toString(2).length));
};

const test = (binary, ones) => {
  if (binary.includes(ones)) return ones.length;
  return test(binary, "1".repeat(ones.length - 1));
};
