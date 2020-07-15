module.exports = function findNearestVowels(str) {
  function convertToChar(character) {
    return character.charCodeAt();
  }
  function checkNearestVowel(character) {
    const vowelsCharCodes = ["a", "e", "i", "o", "u"].map((char) =>
      convertToChar(char)
    );
    return vowelsCharCodes.reduce((prev, curr) => {
      const distanceFromVowel = Math.abs(character - curr);
      return distanceFromVowel < prev ? distanceFromVowel : prev;
    }, character);
  }

  return [...str]
    .map((char) => convertToChar(char))
    .map((charCode) => checkNearestVowel(charCode));
};
