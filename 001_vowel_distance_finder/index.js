module.exports = function findNearestVowels(str) {
<<<<<<< HEAD
    //create an array of all the letters
    const letters = str.split("");
    //create an array of the alphabet (a == char code 97)
    const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
    //create an array of the possible vowels
    const vowels = "aeiou".split("");
    //create an empty array to hold the answer
    const answer = [];

    //loop over each letter
    for (const letter of letters) {
        //find where the target letter is in the alphabet
        const letterPosition = alphabet.indexOf(letter);
        //create an array to hold the possible distances between each letter and vowel
        const letterDistances = [];
        //loop through each vowel and see how far it is from each letter
        for (const vowel of vowels) {
          //find the position of the vowel in the alphabet
          const vowelPosition = alphabet.indexOf(vowel);
          //put the distance between each letter and vowel in possible distances array
          letterDistances.push(Math.abs(letterPosition - vowelPosition));
        }
        //add the smallest to the answer array
        answer.push(Math.min(...letterDistances)); 
    }
    return answer;
  };
  
=======
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
>>>>>>> master
