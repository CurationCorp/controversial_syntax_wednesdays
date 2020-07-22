module.exports = function findLargestOneSequence(n) {
  if (n < 0) return 0;

  function getBinary(number) {
    let num = number;
    var binary = "";
    while (num > 0) {
      var oneOrZero = num % 2;
      binary += oneOrZero;
      num = Math.floor(num / 2);
    }

    return [...binary].reverse().join("");
  }

  return getBinary(n)
    .split("0")
    .map((ones) => ones.length)
    .reduce((prev, curr) => (prev > curr ? prev : curr));
};
