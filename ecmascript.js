// 1------------------------------------
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

let { first: f, third: x, fifth = "Name №5" } = names;
// let fifth = "Name №5"

console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"

// 2------------------------------------
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let { names: otherNames, ages } = data;

let [name1, name2, name3, name4] = otherNames;
let [age1, age2, age3, age4] = ages;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// 3------------------------------------
function mul(...arr) {
   let result = 0;
     for (let i = 0; i < arr.length; ++i) {
       let value = parseFloat(arr[i]);
      if (!isNaN(value)) {
         result += value;
      }
    }
    return result;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

// 4------------------------------------
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = new Map();

function mapBuilder(keys, values) {
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i], values[i]);
  }
}

mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"
// 5------------------------------------
var arr = [];

for (var i = 0; i <= 2; i++) {
  arr[i] = (function (number) {
    return function () {
      console.log(number);
    };
  })(i);
}

arr[0](); // 0
arr[arr.length - 1](); // 2