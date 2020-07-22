module.exports = function findLargestOneSequence(n) {
  if (n > 0) {
    return Number(n)
      .toString(2)
      .split("")
      .map((digit) => parseInt(digit))
      .reduce(
        (acc, curr) => {
          if (curr) {
            acc.run++;
            if (acc.run >= acc.highest) {
              acc.highest = acc.run;
            }
          } else {
            acc.run = 0;
          }
          return acc;
        },
        { highest: 0, run: 0 }
      ).highest;
  }
  return 0;
};
