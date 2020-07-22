module.exports = function findLargestOneSequence(n) {
<<<<<<< HEAD
  if (n > 0) {
    return Number(n)
      .toString(2)
      .split("")
      .map((digit) => parseInt(digit))
      .reduce(
        (acc, curr) => {
          if (curr) {
            if (acc.run >= acc.highest) {
              acc.run++;
              acc.highest = acc.run;
            } else {
              acc.run++;
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

// console.log(findLargestOneSequence(-100));
=======
  return;
};
>>>>>>> master
