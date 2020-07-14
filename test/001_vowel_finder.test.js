const expect = require("chai").expect;
const findNearestVowels = require("../001_vowel_finder/index");

it("should return an array of the distance from each letter in a string to its nearest vowel", () => {
  expect(findNearestVowels("abc")).to.eql([0, 1, 2]);
  expect(findNearestVowels("aeiou")).to.eql([0, 0, 0, 0, 0]);
  expect(findNearestVowels("dhnt")).to.eql([1,1,1,1]);
  expect(findNearestVowels("aaaaaa")).to.eql([0, 0, 0, 0, 0, 0]);
  expect(findNearestVowels("abcdefghijklm")).to.eql([0,1,2,1,0,1,2,1,0,1,2,3,2])
  expect(findNearestVowels("z")).to.eql([5])
});
