let userSentence = prompt("Type a sentence:");
console.log(userSentence);
console.log(userSentence.length);
let firstLetter = userSentence.charAt(0).toUpperCase();
let lastLetter = userSentence.charAt(userSentence.length-1).toUpperCase();
console.log(firstLetter);
console.log(lastLetter);

function capLetters(userSentence) {
  let newString = firstLetter.concat(lastLetter);
  return newString;
}

function reverseCapLetters(userSentence) {
  let newReverseString = firstLetter.concat(lastLetter).split("").reverse().join("");
  return userSentence.concat(newReverseString);
}

function third (userSentence) {
//   return capLetters(userSentence).concat(reverseCapLetters(userSentence));
// }