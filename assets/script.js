// Assignment Code
var generateBtn = document.querySelector("#generate");

var withNumbers = "1234567890";
var withSymbols = "!@#$%^&*()_+=<>;.";
var withUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var withLowercase = "abcdefghijklmnopqrstuvwxyz";

function generatePassword() {
  var length = prompt("How many characters would you like your password to be? (minimum: 1, maximum: 128)");
  var upcase = confirm("Would you like Upper Case Letters? (OK = Yes, Cancel = No)");
  // var lowcase = confirm("Would you like Lower Case Letters? (OK = Yes, Cancel = No)");
  // var symbols = confirm("Would you like symbols in your password? (OK = Yes, Cancel = No)");
  // var numbers = confirm("Would you like numbers in your password? (OK = Yes, Cancel = No)");

  if (upcase === true) {
      var passcode = "";
      for (i = 0; i < length; i++) {
        passcode += withUppercase.charAt(
          Math.floor(Math.random() * withUppercase.length)
          );
    }
    return passcode;
  }
  console.log(passcode)
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);