// 1 ----------------------------------------------------
const ul = document.getElementById('list');
const first = ul.children[0];
const second = ul.children[1];
const third = ul.children[2];
const fourth = ul.children[3];
const fifth = ul.children[4];

ul.insertBefore(first, ul.children[0]); 
ul.insertBefore(fifth, second); 
ul.insertBefore(second, third); 
ul.insertBefore(fourth, third);
alert(ul.innerText);

// 2 ----------------------------------------------------
const h1 = document.querySelector('h1'); 
h1.style.background = 'hsl(120deg 73.44% 74.9%)';
h1.style.fontSize = '3em';

const div = document.getElementById('myDiv');
const p1 = div.children[0];
p1.style.fontWeight = '800';
const p2 = div.children[1];
p2.style.color = 'red';
const p3 = div.children[2];
p3.style.textDecoration = 'underline';
const p4 = div.children[3];
p4.style.fontStyle = ' oblique';

const myList = document.getElementById("myList"); 

const listItems = myList.getElementsByTagName("li"); 

let newString = ""; 

for (let i = 0; i < listItems.length; i++) { 
  newString += listItems[i].textContent; 
}

const span = document.querySelector("span"); 
span.textContent = newString; 
span.style.paddingLeft = "40px";
myList.remove(); 

// 3 ----------------------------------------------------
const main = document.createElement('main'); 
main.setAttribute('class', 'mainClass check item') 
document.body.appendChild(main); 

const divNew = document.createElement("div");
divNew.setAttribute('id', 'myDiv')
main.append(divNew);


const p = document.createElement("p");
p.textContent = "First paragraph";
divNew.append(p);
console.log(document.body);

// 4 ----------------------------------------------------
// let btn = document.querySelector('.btn');
// let value = document.querySelectorAll('.arr');
// let out = document.querySelector('.out');

// btn.addEventListener('click', () => {
//   const values = [];
//   value.forEach(value => {
//     values.push(`${value.dataset.form}: ${value.value}`);
//   });
//   out.innerText = values.join('\n');
// });

// 5 ----------------------------------------------------
// const circles = document.querySelectorAll('.circle');

// circles.forEach(circle => {
//   const animation = circle.dataset.anim;
//     circle.classList.add(animation);
// });

// if (сircle.classList.contains('zoom-in')) {
//   console.log('Анімація zoom-in була застосована.');
// } else {
//   console.log('Анімація zoom-in не була застосована.');
// }

// 6 ----------------------------------------------------
// const colorButtons = document.querySelectorAll('.colors .color');

// colorButtons.forEach(function(button) {
//   button.addEventListener('click', function() {
//     const activeButton = document.querySelector('.colors .color.active');
//     activeButton.classList.remove('active');
//     button.classList.add('active');
    
//     const color = button.getAttribute('color');
//     const shoeImage = document.querySelector(`.shoe[color="${color}"]`);

//     document.querySelector('.shoe.show').classList.remove('show');
//     shoeImage.classList.add('show');

//     const price = button.getAttribute('data-price');
//     document.querySelector('#outprice').textContent = price;
//   });
// });