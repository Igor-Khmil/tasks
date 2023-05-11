// 1---------------------------------------------
let text = prompt("Enter text:");
function checkText(){
let regex = /^[A-Z]/
    if (regex.test(text))
        console.log( `String's starts with uppercase character`);
    else
        console.warn(`String's not starts with uppercase character`);
}
checkText();

//2--------------------------------------------
//const email = prompt("Enter email address:");
let email = 'Qmail2@gmail.com';
function checkNewEmal() {
    let emailRegEx = /^[\w\.\-]{3,}@\w+\.\w+$/;
    console.log(emailRegEx.test(email))
    console.log(`Email addres is ${emailRegEx.test(email) ? "valid" : "invalid"}`);
}
checkNewEmal();

//3--------------------------------------------
function moveWord(s) {
    return s.replace(/([A-Za-z]+)\s([A-Za-z]+)/, '$2, $1');
}
let str=moveWord('Java Script');
console.log(str);

//4--------------------------------------------
const cardNum = prompt("Enter card number:");
let cardNumRegEx = /^(\d{4}\-){3}\d{4}$/;
function checkCardNum() {
    return console.log(cardNumRegEx.test(cardNum));
}
checkCardNum();
console.log(`Number card is ${cardNumRegEx.test(cardNum) ? "valid" : "invalid"}`);
// // 5--------------------------------------------

function checkEmail(email){
  let emailRegEx = /^[a-zA-Z0-9]+\w*\-?\w*@\w+\.\w+$/;
  console.log(`Email is ${emailRegEx.test(email) ? "correct!" : "not correct!"}`);
}

checkEmail('mymail123@gmail.co'); // "Email is correct!"
checkEmail('#my_mail@gmail.com'); // "Email is not correct!"
checkEmail('my_mail-@gmail.com'); // "Email is correct!"
checkEmail('my-_ma_il@gmail.com'); // "Email is correct!"
checkEmail('sdf-sdf-sdf@sdf.sdd'); // "Email is not correct!"

//6--------------------------------------------
let login = 'e1.1f6r7t';
let loginRegEx = /^[a-z](\d\.?|[a-z]){1,9}$/gi; 
console.log(loginRegEx.test(login));

function checkLogin(login) {
  let numbers = login.match(/(\d+(\.\d+)?)/g); 
  console.log(numbers); 
  return numbers || ''; 
}

checkLogin(login); 