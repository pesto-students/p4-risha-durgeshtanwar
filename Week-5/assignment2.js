// assignment number 5.2
// Write a function called vowelCount which accepts a string and returns a map where the keys arenumbers and the values are the count of the vowels in the string.
function isVowel(char) {
  return "aeiou".includes(char);
}
function findVowels(string) {
  const vowelCount = new Map();
  [...string].forEach((char) => {
    if (isVowel(char.toLowerCase())) {
      if (vowelCount.has(char.toLowerCase())) {
        vowelCount.set(char.toLowerCase(), vowelCount.get(char) + 1);
      } else {
        vowelCount.set(char, 1);
      }
    } else {
      return "No vowel found";
    }
  });
  return vowelCount;
}

console.log(findVowels("ooooooooooooooooooooooooiiiiiiiiwwsaaaaaaaa"));

// assignment 5.3

function hasDuplicate(array) {
  let count = array.length;
  return new Set(array).size === count;
}

console.log(hasDuplicate([1, 2, 4, 5, 6]));
console.log(hasDuplicate([1, 2, 2, 5, 6]));
console.log(hasDuplicate([1, 2, 3, 4, 2, 33, 5, 6]));
