//   1  -----------------------------------------------------------
class Circle {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  
    get lengthCircle() {
      return Math.round(2 * Math.PI * this.radius);
    }
  
    static getLengthCircle(radius) {
      return Math.round(2 * Math.PI * radius);
    }
  
    get copyCircle() {
      return new Circle(this.x, this.y, this.radius);
    }
  
    static createCircle(x, y, radius) {
      return new Circle(x, y, radius);
    }
  
    isPointInsideCircle(x, y) {
      return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2)) < this.radius;
    }
  
    toString() {
      return `Circle with center (${this.x},${this.y}) and radius ${this.radius}`;
    }
  }
  
  const circle = new Circle(1, 1, 10);
  console.log(circle.lengthCircle);
  console.log(Circle.getLengthCircle(5));
  const copy = circle.copyCircle;
  console.log(copy); 
  const newCircle = Circle.createCircle(10, 10, 7);
  console.log(newCircle); 
  console.log(circle.isPointInsideCircle(2, 2));
  console.log(circle.toString());

//   2  -----------------------------------------------------------
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development", 
    user: "Student", 
    age: 32,
    name: "Ihor" 
};
function propsCount(currentObject) {
return Object.keys(currentObject).length;;
}
console.log(propsCount(mentor));

//   3  -----------------------------------------------------------
class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
    showFullName(midleName) {
      return (`Full Name: ${this.name} ${this.surname} ${midleName}`);
    }
    showCourse() {
      let nowYear = + new Date().getFullYear();
      return nowYear - this.year;
    }
  }
  const stud1 = new Student("Petro", "Petrenko", 2019);
  console.log(stud1.showFullName("Petrovych"));
  console.log("Current course: " + stud1.showCourse());

//   4  -----------------------------------------------------------
class Marker {
    constructor(color, ink) {
      this.color = color;
      this.ink = ink;
    }
  
    print(text) {
      let inkPerChar = 0.5;
      let inkRequired = 0;
      let printedText = '';
    
      for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ') {
          inkRequired += inkPerChar;
        }
        if (inkRequired <= this.ink) {
          printedText += text[i];
        } else {
          break;
        }
      }
    
      if (printedText.length > 0) {
        this.ink -= inkRequired;
        console.log('%c' + printedText, 'color: ' + this.color);
      } else {
        console.log('Not enough ink to print the text!');
      }
    }
  }
  
  let pinkMarker = new Marker('pink', 15);
  pinkMarker.print('Продемонструвати роботу рожевого маркера допоки буде чорнило !');
  
  class RefuelingMarker extends Marker {
    constructor(color, ink) {
      super(color, ink);
    }
  
     refuel() {
      this.ink = 100;
    }
  }
  
  let redMarker = new RefuelingMarker('red', 0);
  let blueMarker = new RefuelingMarker('blue', 0);
  
  redMarker.refuel();
  redMarker.print('Продемонструвати роботу червоного маркера після заправки!');
  blueMarker.print('Продемонструвати роботу синього незаправленого маркера!');
  blueMarker.refuel();
  blueMarker.print('Продемонструвати роботу синього маркера після заправки!');
  

//   5  -----------------------------------------------------------
class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
    }
    showSalary() {
      let salary = this.dayRate * this.workingDays;
      //console.log(`${this.fullName} salary: ${salary}`);
      return salary;
    }
    set experience(value) {
      this.#experience = value;
    }
    get experience() {
      return this.#experience;
    }
    showSalaryWithExperience() {
      let salary = this.dayRate * this.workingDays * this.#experience;
      // console.log(`${this.fullName} salary: ${salary}`);
      return salary;
    }
  }
  let workers = [];
  
  let worker1 = new Worker("John Johnson", 20, 23);
  workers.push(worker1);
  
  let worker2 = new Worker("Tom Tomson", 48, 22);
  workers.push(worker2);
  
  let worker3 = new Worker("Andy Ander", 29, 23);
  workers.push(worker3);
  
  console.log(worker1.fullName);
  worker1.showSalary();
  console.log(`${worker1.fullName}, salary: ${worker1.showSalary()}`);
  console.log("New experience: " + worker1.experience);
  worker1.showSalaryWithExperience();
  console.log(`${worker1.fullName}, salary: ${worker1.showSalaryWithExperience()}`);
  worker1.experience = 1.5;
  console.log("New experience: " + worker1.experience);
  worker1.showSalaryWithExperience();
  console.log(`${worker1.fullName}, salary: ${worker1.showSalaryWithExperience()}`);
  console.log('....................................');
  console.log(worker2.fullName);
  worker2.showSalary();
  console.log(`${worker2.fullName}, salary: ${worker2.showSalary()}`);
  console.log("New experience: " + worker2.experience);
  worker2.showSalaryWithExperience();
  console.log(`${worker2.fullName}, salary: ${worker2.showSalaryWithExperience()}`);
  worker2.experience = 1.5;
  console.log("New experience: " + worker2.experience);
  worker2.showSalaryWithExperience();
  console.log(`${worker2.fullName}, salary: ${worker2.showSalaryWithExperience()}`);
  console.log('....................................');
  console.log(worker3.fullName);
  worker3.showSalary();
  console.log(`${worker3.fullName}, salary: ${worker3.showSalary()}`);
  console.log("New experience: " + worker3.experience);
  worker3.showSalaryWithExperience();
  console.log(`${worker3.fullName}, salary: ${worker3.showSalaryWithExperience()}`);
  worker3.experience = 1.5;
  console.log("New experience: " + worker3.experience);
  worker3.showSalaryWithExperience();
  console.log(`${worker3.fullName}, salary: ${worker3.showSalaryWithExperience()}`);
  console.log('....................................');
  workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
  console.log("Sorted workers:");
  for (let worker of workers) {
    console.log(`${worker.fullName}, salary: ${worker.showSalaryWithExperience()}`);
  }