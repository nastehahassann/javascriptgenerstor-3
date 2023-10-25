// Assignment Code

var generateBtn = document.querySelector("#generate");
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerCaseCharacter = "abcdefghijklmnopqrstuvwxyz".split("")
var numbers = "0123456789".split("")
var symbols = "!£$%^&".split("")



function generatePassword() {
  var options = []
  var finalPassword= []
  var passwordLength = prompt("How long would you like your password to be")
  var upperCase = confirm("Do you want upper case")
  var lowerCase = confirm("Do you want lower case")
  var numeric = confirm("Do you want numbers")
  var specialCharacters = confirm("Do you want special characters")

  if (upperCase === true) {
    options = options.concat(upperCaseCharacters)
  }

  if (lowerCase === true) {
    options = options.concat(lowerCaseCharacter)
  }

  if (numeric === true) {
    options = options.concat(numbers)
  }

  if (specialCharacters === true) {
    options = options.concat(symbols)
  }
for (let index = 0; index < passwordLength; index++) {
  var random= Math.floor(Math.random()*options.length)
  finalPassword.push(options [random])
  
}

return finalPassword.join("")

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
