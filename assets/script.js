// Assignment code here
function getRandomInt (max) {
  return Math.floor(Math.random() * max);
}

var passwordOptions = {
  lower: "abcdefghijklmnopqrstuvxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  special: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  numeric: "0123456789"
}

function confirmLength() {
  passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = window.prompt("Pick a password legnth between 8 and 128 characters long.")
  }
}

function generatePassword() {
  var randomPassword = ""
  var characterPool = ""
  confirmLength();
  var confirmLower = window.confirm("Does the password require lower-case characters?")
  var confirmUpper = window.confirm("Does the password require upper-case characters?")
  var confirmSpecial = window.confirm("Does the password require special characters?")
  var confirmNumeric = window.confirm("Does the password require numeric characters?")
  if (confirmLower) {
    characterPool += passwordOptions.lower;
  }
  if (confirmUpper) {
    characterPool += passwordOptions.upper;
  }
  if (confirmSpecial) {
    characterPool += passwordOptions.special;
  }
  if (confirmNumeric) {
    characterPool += passwordOptions.numeric;
  }

  if (!confirmLower && !confirmUpper && !confirmSpecial && !confirmNumeric) {
    window.alert("You must pick at least 1 type of character.")
    return "try again"
  
  }

    
    // function suffle(){
  //   var randomPool = characterPool.split(' ');
  //   randomPool.sort(function() {
  
  //   })

  // }

  console.log(characterPool[0]);
  for(var i = 0; i < passwordLength; i ++) {
    randomPassword += characterPool[getRandomInt(characterPool.length)];
  }
  return randomPassword;
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

