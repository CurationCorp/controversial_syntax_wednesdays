module.exports = function findNearestVowels(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const vowels = "aeiou".split("");
  input = str.split("");

  let vowel_indices = [];
  let input_indices = [];
  let output = [];

  vowels.forEach((vowel) => vowel_indices.push(alphabet.indexOf(vowel)));
  input.forEach((char) => input_indices.push(alphabet.indexOf(char)));
  input_indices.forEach((ind) => output.push(closest(ind, vowel_indices)));
  return output;
};

function closest(ind, vowel_indices) {
  nearest = vowel_indices.reduce((a, b) => {
    let aDiff = Math.abs(a - ind);
    let bDiff = Math.abs(b - ind);

    if (aDiff == bDiff) {
      return a > b ? a : b;
    } else {
      return bDiff < aDiff ? b : a;
    }
  });
  return Math.abs(nearest - ind);
}
