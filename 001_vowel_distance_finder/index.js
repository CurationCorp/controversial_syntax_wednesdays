const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
const vowels = ['a', 'e', 'i', 'o', 'u'];

function findClosestVowel(letter, direction) {
  const indexOfLetterInAlphabet = alphabet.indexOf(letter);
  for (
    let i = direction === 'asc' ? indexOfLetterInAlphabet + 1 : indexOfLetterInAlphabet - 1;
    direction === 'asc' ? i < alphabet.length : i >= 0;
    direction === 'asc' ? i += 1 : i -= 1
  ) {
    const potentialVowel = alphabet[i];
    if (vowels.includes(potentialVowel)) {
      return direction === 'asc' ? i - indexOfLetterInAlphabet : indexOfLetterInAlphabet - i;
    }
  }
}

module.exports = function findNearestVowels(str) { 
  return str.split('').map((letter) => {
    if (vowels.includes(letter)) return 0;
    const decendingNearestVowel = findClosestVowel(letter, 'desc');
    const ascendingNearestVowel = findClosestVowel(letter, 'asc');
    return decendingNearestVowel > ascendingNearestVowel ? ascendingNearestVowel : decendingNearestVowel;
  }); 
}
