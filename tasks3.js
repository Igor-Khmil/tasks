// 1.
function createArray(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }
  const arr = createArray(3, 15);
  console.log(arr);

// 2.
function nums(a, b) {
  let i = a;
  let result = [];
  while (i <= b) {
    let repeatNum = i;
    while (repeatNum > 0) {
      result.push(i); 
      repeatNum--;
    } 
    i++;
  }
  return result; 
}

console.log(nums(1, 3));

// 3.
function randArray(k) {
    let arr1 = [];
    for (let i = 0; i < k; ++i) {
      let value = Math.floor(Math.random() * 500);
      arr1.push(value);
    }
    return arr1;
  }
    console.log(randArray(5));

// 4.
function compact(arr3) {
    return Array.from(new Set(arr3));
  }
  const arr3 = [5, 3, 4, 5,6,7,3];
  const arr4 = compact(arr3);
  console.log(arr4);


// 5.
function sortType(arr) {
    const result = [];
    const numbers = [];
    const strings = [];
  
    arr.forEach(item => {
      if (Array.isArray(item)) {
        item.forEach(subitem => {
          if (typeof subitem === "number" && !isNaN(subitem)) {
            numbers.push(subitem);
          } else {
            strings.push(subitem);
          }
        });
      } else if (typeof item === "number" && !isNaN(item)) {
        numbers.push(item);
      } else {
        strings.push(item);
      }
    });
    result.push(numbers);
    result.push(strings);
    return result;
  }
  
  let arrMix = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  let arrNew = sortType(arrMix);
  
  console.log(arrNew);

// 6.
function calc (a, b, op){
    switch (op) {
      case 1 : return a - b;  break;
      case 2 : return a * b;  break; 
      case 3 : return a / b;  break;
      default : return a + b; break;  
    }
  }
  console.log(calc (9, 3, 2));

//7.
function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
        return false;
      }
    }
    return true;
  }

console.log(findUnique([1, 2, 3, 5, 3]));  // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true