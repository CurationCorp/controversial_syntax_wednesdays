const expect = require("chai").expect;
const findLargestOneSequence = require("../002_binary_ones_length/index");

it("should return an integer of the largest sequence of 1s of it's binary equivilent", () => {
  expect(findLargestOneSequence(30)).to.eql(4);
  expect(findLargestOneSequence(250)).to.eql(5);
  expect(findLargestOneSequence(0)).to.eql(0);
  expect(findLargestOneSequence(-100)).to.eql(0);
  expect(findLargestOneSequence(2)).to.eql(1);
  expect(findLargestOneSequence(151)).to.eql(3);
});
