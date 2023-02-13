// Assignment Code
var generateBtn = document.querySelector("#generate");

var withNumbers = "1234567890";
var withSymbols = "!@#$%^&*()_+=<>;.";
var withUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var withLowercase = "abcdefghijklmnopqrstuvwxyz";
// declared global variables for character sets
function generatePassword() {
  var length = prompt(
    "How many characters would you like your password to be? (minimum: 8, maximum: 128)"
  );
  {
    if (length === null) {
      return;
    } else
      while (length < 8 || length > 128 || isNaN(length)) {
        length = prompt("Please enter a number between 8 - 128");
      }
  }
  // while loop for # validation
  var upcase = confirm(
    "Would you like Upper Case Letters? (OK = Yes, Cancel = No)"
  );
  var lowcase = confirm(
    "Would you like Lower Case Letters? (OK = Yes, Cancel = No)"
  );
  var symbols = confirm(
    "Would you like symbols in your password? (OK = Yes, Cancel = No)"
  );
  var numbers = confirm(
    "Would you like numbers in your password? (OK = Yes, Cancel = No)"
  );
  // kept to binary values for ease of use
  if (
    upcase === true &&
    lowcase === true &&
    symbols === true &&
    numbers === true
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withUppercase.concat(
        withLowercase,
        withNumbers,
        withSymbols
      );
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === true &&
    lowcase === true &&
    symbols === true &&
    numbers === false
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withUppercase.concat(withLowercase, withSymbols);
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === true &&
    lowcase === true &&
    symbols === false &&
    numbers === true
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withUppercase.concat(withLowercase, withNumbers);
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === true &&
    lowcase === true &&
    symbols === false &&
    numbers === false
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withUppercase.concat(withLowercase);
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === true &&
    lowcase === false &&
    symbols === true &&
    numbers === true
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withUppercase.concat(withNumbers, withSymbols);
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === true &&
    lowcase === false &&
    symbols === true &&
    numbers === false
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withUppercase.concat(withSymbols);
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === true &&
    lowcase === false &&
    symbols === false &&
    numbers === true
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withUppercase.concat(withNumbers);
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === true &&
    lowcase === false &&
    symbols === false &&
    numbers === false
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withUppercase;
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === false &&
    lowcase === true &&
    symbols === true &&
    numbers === true
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withLowercase.concat(withNumbers, withSymbols);
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === false &&
    lowcase === true &&
    symbols === true &&
    numbers === false
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withLowercase.concat(withSymbols);
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === false &&
    lowcase === true &&
    symbols === false &&
    numbers === true
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withLowercase.concat(withNumbers);
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === false &&
    lowcase === true &&
    symbols === false &&
    numbers === false
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withLowercase;
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === false &&
    lowcase === false &&
    symbols === true &&
    numbers === true
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withSymbols.concat(withNumbers);
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === false &&
    lowcase === false &&
    symbols === true &&
    numbers === false
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withSymbols;
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === false &&
    lowcase === false &&
    symbols === false &&
    numbers === true
  ) {
    let passcode = "";
    for (i = 0; i < length; i++) {
      let charset = withNumbers;
      passcode += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return passcode;
  } else if (
    upcase === false &&
    lowcase === false &&
    symbols === false &&
    numbers === false
  ) {
    alert("You didn't select any options! Please try again");
    return;
  }
}
// used a loop to generate password, put all combinations that can be achieved through the prompts and the charsets that should be used, then used the concat feature to create a unique charset for each condition which will return the randomized password using the new charset variable and selecting random indices using .charAt and with mathrandom multipled by the charset length

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
