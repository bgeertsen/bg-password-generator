// Assignment code here
function getRandomInt (max) {
  return Math.floor(Math.random() * max);
}

var passwordChars = {
  lower: "abcdefghijklmnopqrstuvxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  special: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  numeric: "0123456789"
}

function confirmLength() {
  passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Pick a password legnth between 8 and 128 characters long.")
  }
}

function generatePassword() {
  var phrase = ""
  confirmLength();
  var confirmUpper = window.confirm("Does the password require upper case characters in the password?")
  var confirmSpecial = window.confirm("Does the password require special characters?")
  var confirmNumeric = window.confirm("Does the password require numeric characters?")
  if (confirmUpper) {
    passwordChars.lower += passwordChars.upper;
  }
  if (confirmSpecial) {
    passwordChars.lower += passwordChars.special;
  }
  if (confirmNumeric) {
    passwordChars.lower += passwordChars.numeric;
  }
  for(var i = 0; i < passwordLength; i ++) {
    phrase += passwordChars.lower[getRandomInt(passwordChars.lower.length)];
  }
  return phrase;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

