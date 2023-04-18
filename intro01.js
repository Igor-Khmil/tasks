console.log('Khmil');  //2

let fruit = 'apple';   //3
let bestFruit = 'banana';
alert(`fruit: ${fruit}`);
alert(`bestFruit: ${bestFruit}`);
bestFruit = fruit ;
alert(`fruit: ${fruit}`);
alert(`bestFruit: ${bestFruit}`);

let user = {   //4
    name: 'Roman',
    age: 20,
    online: true,
    phoneNumber: null,
    adress:undefined ,
}
console.log(user);

let isAdult = confirm('Do you confirm that you are 18 years old?');  //5
console.log(isAdult);


  const myFirstName = 'Ihor';    //6
  const mySecondName = 'Khmil';
  let myGroup = 'JS Fundamentals';
  const myYearOfBirth = 1986;
  let married = true;

  console.log(myYearOfBirth);
  console.log(married);
  console.log(myFirstName);
  console.log(mySecondName);
  console.log(myGroup);

  let numberOfChildren = null;
  let myAddress;

  let userlogin = prompt('login: ')                     //7
  let userEmail = prompt('Enter your email: ')
  let userPassword = prompt('Enter your password: ')
  alert((`Dear User, your email is ${userEmail}, your password is ${userPassword}!`))


  
  let hour = 1 ;  //8
  let days = 1;
  let month = 1; 
  let secondsPerHour = hour * 60 * 60;
  let hourInDays = days * 24 ;
  let daysPerMonth = month * 30;
  let secondsPerMonth = daysPerMonth * hourInDays * secondsPerHour;
  console.log(`secondsPerMonth ${secondsPerMonth}`);