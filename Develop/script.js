// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(function () {
    
  });
  var passwordText = document.querySelector("#password");
  
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//copy to clipboard
clipboardEl.addEventListener('click', () => {
  var textarea = document.createElement('textarea');
  var password = resultEl.innerText;

  if(!password){
    return;
  }
  textarea.value = password;
  document.body.appendChild('textarea');
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password has been copied to your clipboard!')
})