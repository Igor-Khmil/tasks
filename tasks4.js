// 1
function sumSliceArray(arr, first, second) {
    if (isNaN(first) || isNaN(second)) {
      throw new TypeError('One or both indices are not numbers!');
    }
    if (first >= arr.length || first < 0 || second >= arr.length || second < 0) {
      throw new RangeError(`Index is out of range [${0}...${arr.length - 1}]`);
    }
    return arr[first] + arr[second];
  }
  
  let numbers = [4, 7, 2, 9, 5, 6, 8, 10];
  try {
    console.log(sumSliceArray(numbers, 2, 4));
  } catch (error) {
    console.error(error.message);
  }

//   2
function checkAge() {
    let name = prompt('Enter your name: ');
    let age = +prompt('Enter your age: ');
    let status = prompt('Enter your status: ');
  
    try {
      if(isNaN(age)) {
        throw new TypeError('Age must be a number!');
      }
      if(age < 18 || age > 70) {
        throw new RangeError('Your age does not allow you to enter the page!!!');
      }
      if(!name || !age || !status) {
        throw new Error('The field is empty! Please enter your data!');
      }
      if(status !== "admin" && status !== "user" && status !== "moderator") {
        throw new EvalError('User status entered incorrectly!');
      }
      alert('Enjoy watching the movie!');
    } catch (error) {
      console.error(error.message);
    }
  }
  checkAge();

//   3
function calcRectangleArea(width, height) {
    if (typeof width !== "number" || typeof height !== "number") {
    throw new TypeError("Both parameters must be numbers.");
    }
    if (width <= 0 || height <= 0) {
    throw new EvalError("The number cannot be less or equal zero!");
    }
    return width * height;
    }
    
    try {
    console.log(calcRectangleArea(3, 6));
    } catch (error) {
    console.error("Error message:", error.message);
    }

//  4
class MonthException extends Error {
    constructor(message) {
      super(message);
      this.name = 'MonthException';
    }
  }
  
  function showMonthName(month) {
    if (typeof month !== 'number' || month < 1 || month > 12) {
      throw new MonthException('Incorrect month number');
    }
  
    switch (month) {
      case 1: return 'January';
      case 2: return 'February';
      case 3: return 'March';
      case 4: return 'April';
      case 5: return 'May';
      case 6: return 'June';
      case 7: return 'July';
      case 8: return 'August';
      case 9: return 'September';
      case 10: return 'October';
      case 11: return 'November';
      case 12: return 'December';
    }
  }
  
  try {
    console.log(showMonthName(7));
    console.log(showMonthName(13));
  } catch (error) {
    if (error instanceof MonthException) {
      console.error(error.name, error.message);
    } else {
      console.log(error);
    }
  }

//   5
function showUser(id) {
  try {
    if (isNaN(id) || id <= 0) {
      throw new Error(`ID must not be negative or zero : ${id}`);
    }
    return +id;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
  function showUsers(ids) {
  const goodIds = [];

  ids.forEach((id) => {
    const goodId = showUser(id);
    if (goodId) {
      goodIds.push({ id: goodId });
    }
  });

  return goodIds;
}

console.log(showUsers([7, -12, 44, 22]));
