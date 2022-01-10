let userSentence = prompt("Type a sentence:");
console.log(userSentence);
console.log(userSentence.length);
let firstLetter = userSentence.charAt(0).toUpperCase();
let lastLetter = userSentence.charAt(userSentence.length-1).toUpperCase();
console.log(firstLetter);
console.log(lastLetter);

function capLetters(userSentence) {
  let firstLetter = userSentence.charAt(0).toUpperCase();
  let lastLetter = userSentence.charAt(userSentence.length-1).toUpperCase(); 
  return firstLetter.concat(lastLetter);
}