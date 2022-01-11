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

function fourth() {
  let indexNumber = Math.floor(userSentence.length / 2);
  let beginLetter = userSentence.charAt(indexNumber);
  console.log(beginLetter);
  return beginLetter.concat(reverseCapLetters());
}
