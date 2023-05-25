//1---------------------------------------------------
function getPromise(message, delay) {
  return new Promise(function(resolve) {
    window.setTimeout(function() {
      console.log(message);
      resolve(message);
    }, delay);
  });
}

getPromise("test promise", 2000)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.log(error);
  });

//2---------------------------------------------------
function calcArrProduct(arr) {
  return new Promise(function(resolve, reject) {
    let result = 1; 
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        result *= arr[i]; 
      } else {
        reject(new Error("Incorrect array!")); // Видаємо помилку, якщо знайдено невірний тип елемента
        return; 
      }
    }
    resolve(result); // Виконання успішне, повертаємо результат
  });
}

calcArrProduct([3, 4, 5])
  .then(result => console.log(result)) // 60
  .catch(error => console.log(error));

calcArrProduct([5, "user2", 7, 12])
  .then(result => console.log(result)) // Error! Incorrect array!
    .catch(error => console.log(error));

//3---------------------------------------------------
// Створіть наступний асинхронний ланцюжок promise:
new Promise(function (resolve, reject) {
  let num = +prompt('Введіть число');
  if (isNaN(num)) {
    reject(new Error("Incorrect number!"));
  } else {
    resolve(num);
  }
}).catch(function (error) {
  return new Promise(function (resolve, reject) {
    let num = prompt('Введіть коректне число');
    while (isNaN(num)) {
      num = prompt('Введіть коректне число');
    }
    resolve(+num);
  });
}).then(function (result) {
  console.log(result);
});

//4---------------------------------------------------
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
  for (let i = 0; i <= 9; i++) {
    const randomTime = Math.floor(Math.random() * 3000); 
    await delay(i, randomTime);
    console.log(i);
  }
}

showNumbers();