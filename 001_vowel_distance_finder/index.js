module.exports = function findNearestVowels(str) {
  function convertToChar(character) {
    return character.charCodeAt();
  }

  function distanceFromCharacter(a, b) {
    return Math.abs(a - b);
  }

  function checkNearestVowel(characterCode) {
    const vowelsCharCodes = ["a", "e", "i", "o", "u"].map((char) =>
      convertToChar(char)
    );
    const distanceFromVowel = vowelsCharCodes.map((vowel) =>
      distanceFromCharacter(vowel, characterCode)
    );

    return distanceFromVowel.reduce((prev, curr) => {
      return prev < curr ? prev : curr;
    }, distanceFromVowel[0]);
  }

  return [...str]
    .map((char) => convertToChar(char))
    .map((charCode) => checkNearestVowel(charCode));
};
