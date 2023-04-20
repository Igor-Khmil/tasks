// 1
let a = 3;
let b = 2;
let c = 1;
let result = a < b < c;
console.log (result);

// 2
let x = 1; 
let y = 2;

let res1 = String(x) + y ;
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = String(x < y) + y;
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x *'y'// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// 3 
let isAdult = prompt('Скільки Вам років? ');
if(isAdult < 18) {
  alert('Ви ще надто молоді!');
} else if (isAdult > 18){
alert('Ви досягли повнолітнього віку!');
} else {
    alert('Ви ввели некоректні дані!');
}

// 4
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
let counts = {}

for (let i = 0; i < arr.length; i++) {
  if (counts[arr[i]]) {
    counts[arr[i]]++;
  } else {
    counts[arr[i]] = 1;
  }
}

let maxNumberOfRepetitions = 0;
let numberThatMostRepeats;
for (let num in counts) {
  if (counts[num] > maxNumberOfRepetitions) {
    maxNumberOfRepetitions = counts[num];
    numberThatMostRepeats = +num;
  }
}

function ev(element){return element!==numberThatMostRepeats;}
arr = arr.filter(ev);
console.log(`Число, яке найбільше повторюється : ${numberThatMostRepeats}`);
console.log(arr);

// 5 
let length1 = + prompt('Введіть першу довжину сторони трикутника : ');
let length2 = + prompt('Введіть другу довжину сторони трикутника : ');
let length3 = + prompt('Введіть третю довжину сторони трикутника : ');

let halfPerimeter = (length1 + length2 + length3);
let area = Math.sqrt(halfPerimeter * (halfPerimeter - length1) * (halfPerimeter - length2) * (halfPerimeter - length3));
console.log(area.toFixed(3));

if (isNaN(length1) || isNaN(length2) || isNaN(length3)) {
alert('Incorrect data');
} else {
let hypotenuse, cathetus1, cathetus2;
if (length1 >= length2 && length1 >= length3) {
hypotenuse = length1;
cathetus1 = length2;
cathetus2 = length3;
} else if (length2 >= length1 && length2 >= length3) {
hypotenuse = length2;
cathetus1 = length1;
cathetus2 = length3;
} else {
hypotenuse = length3;
cathetus1 = length1;
cathetus2 = length2;
}
if (Math.pow(hypotenuse, 2) === Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)) {
console.log('Це прямокутний трикутник');
} else {
console.log('Це не прямокутний трикутник');
}
}

// 6a
let d = new Date();
let hour = d.getHours(); 
if(hour > 23 && hour <= 5) {
  alert('Доброї ночі');
  } else if (hour > 5 && hour <= 11) {
  alert('Доброго ранку');
  } else if (hour > 11 && hour <= 17) {
  alert('Доброго дня');
    } else if (hour > 17 && hour <= 23) {
  alert('Доброго вечора');
  } else {
  alert('Некоректні дані');
  }
// 6b
let message = hour > 23 && hour <= 5 ? 'Доброї ночі'
              : hour > 5 && hour <= 11 ? 'Доброго ранку'
              : hour > 11 && hour <= 17 ? 'Доброго дня'
              : hour > 17 && hour <= 23 ? 'Доброго вечора'
              : 'Некоректні дані';
alert(message);

  