//Attempt without template
//DOM elements
var password = document.getElementById('password');
var lengthEl = document.getElementById('length');
var upperEl = document.getElementById('upper');
var lowerEl = document.getElementById('lower');
var numberEl = document.getElementById('number');
var symbolEl = document.getElementById('symbol');
var generateEl = document.getElementById('generate');
var clipboardEl = document.getElementById('clipboard');


var randomPW = {
Upper: generateUpper,
Lower: generateLower,
Numb: generateNumber,
Symb: generateSymbol
};

//Generate event listen
generateEl.addEventListener('click', () => {
 var length= +lengthEl.value;
 var LowerYN = lowerEl.checked;
 var UpperYN = upperEl.checked;
 var NumberYN = numberEl.checked;
 var SymbolYN = symbolEl.checked;

 password.innerText = generatePassword(length, LowerYN, UpperYN, NumberYN, SymbolYN);

});

//copy to clipboard
clipboardEl.addEventListener('click', () => {
  var textarea = document.createElement('textarea');
  var password = password.innerText;

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

//Generate Password Function
function generatePassword (length, Lower, Upper, Number, Symbol) {
  // 1. initialize password variable
  // 2. filter out unchecked types
  // 3. loop for length and call generator function for each type
  // 4. add pw to pw var and return

  let generatedPassword = '';
  var typesSelected = Upper + Lower + Number + Symbol;
  var typesArray = [{Upper}, {Lower}, {Number}, {Symbol}].filter(
    item => Object.values(item)[0]
  );
  
  if(typesSelected === 0){
    return '';
  }
  
  for(let i = 0; i < length; i += typesSelected){
    typesArray.forEach(type => {
      var funcName = Object.keys(type)[0];
      
      generatedPassword += randomPW[funcName]();
    });
  }

  finalPassword = generatedPassword.slice(0, length);
  return finalPassword;

}

//Functions defined
function generateLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function generateUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function generateNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}
function generateSymbol() {
  const symbols = '=+-_)(*&^%$#@!~;?/>.<,'
  return symbols[Math.floor(Math.random() * symbols.length)];
}