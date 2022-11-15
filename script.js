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
Number: generateNumber,
Symbol: generateSymbol
};

//Generate event listen
generateEl.addEventListener('click', () => {
 var length = +lengthEl.value;
 var LowerYN = lowerEl.checked;
 var UpperYN = upperEl.checked;
 var NumberYN = numberEl.checked;
 var SymbolYN = symbolEl.checked;

 password.innerText = generatePassword(length, LowerYN, UpperYN, NumberYN, SymbolYN);

});

//Generate Password Function
function generatePassword (length, Lower, Upper, Number, Symbol) {

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

  var finalPassword = generatedPassword.slice(0, length);
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
  var symbol = '=+-_)(*&^%$#@!~?/><';
  return symbol[Math.floor(Math.random() * symbol.length)];
}


//copy to clipboard
clipboardEl.addEventListener('click', () => {
  if(!password){
    return;
  }
  else{
    navigator.clipboard.writeText(password.value).then(()=> {
      alert('Password has been copied to clipboard!')
    })
  }
});