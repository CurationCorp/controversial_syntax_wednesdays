const expect = require("chai").expect;
const largestSquare = require("../003_largest_square/index");

it("should return the largest square of ones in a matrix", () => {
  expect(
    largestSquare([
      [1, 0, 1, 1, 1],
      [0, 1, 1, 0, 1],
      [0, 1, 1, 0, 1],
      [0, 1, 1, 0, 1],
    ])
  ).to.eql(2);
  expect(
    largestSquare([
      [1, 1, 1, 1, 1],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1],
    ])
  ).to.eql(3);
  expect(
    largestSquare([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 1, 1, 1, 1],
    ])
  ).to.eql(3);
  expect(
    largestSquare([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ])
  ).to.eql(4);
  expect(largestSquare([[0]])).to.eql(0);
  expect(largestSquare([[1]])).to.eql(1);
});
