// 1 -----------------------------------------------------------
const newWindow = window.open('', '', 'width=300,height=300');
setTimeout(() => {newWindow.resizeTo(500, 500);}, 2000);
setTimeout(() => {newWindow.moveTo(200, 200);}, 4000);
setTimeout(() => {newWindow.close();}, 6000);

// 2 -----------------------------------------------------------
const saveBtn = document.querySelector('button');
const learnText = document.querySelector('p');
saveBtn.addEventListener('click', changeCss);
function changeCss() {
    learnText.classList.toggle('newCss')
}

// 3 -----------------------------------------------------------
const taskThree = document.getElementById('task3');
taskThree.style.padding = '5px 5px 20px 5px';
const blueBtn = taskThree.children[0];
blueBtn.onclick = () => taskThree.style.backgroundColor = 'blue';
const pinkBtn = taskThree.children[1];
pinkBtn.ondblclick = () => taskThree.style.backgroundColor = 'pink';
const brownBtn = taskThree.children[2];
brownBtn.onmousedown = () => taskThree.style.backgroundColor = 'brown';
brownBtn.onmouseup = () => taskThree.style.backgroundColor = 'white';
const yellowBtn = taskThree.children[3];
yellowBtn.onmouseover = () => taskThree.style.backgroundColor = 'yellow';
yellowBtn.onmouseout = () => taskThree.style.backgroundColor = 'white';

// 4 -----------------------------------------------------------
const selectList = document.querySelector('.task4');
const deleteBtn = document.querySelector('.deleteBtn');

deleteBtn.addEventListener('click', () => {
  const selectedIndex = selectList.selectedIndex;
  selectList.options[selectedIndex].remove();
});

// 5 -----------------------------------------------------------
const newLive = document.querySelector('.task5Input');
const liveBtn = document.querySelector('.task5');

liveBtn.onclick = () => newLive.innerHTML +="I was pressed!<br>";
liveBtn.onmouseover = () => newLive.innerHTML +="Mouse on me!<br>";
liveBtn.onmouseout = () => newLive.innerHTML +="Mouse is not on me!<br>";

// 6 -----------------------------------------------------------
const newInputSize = document.querySelector('.task6Input');

window.addEventListener('resize', () => {
newInputSize.innerHTML = `Width: ${window.innerHeight}, Height: ${window.innerWidth}`;
});

// 7 -----------------------------------------------------------
const countries = {
  ger: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
  usa: ["New York", "Los Angeles", "Chicago", "Houston"],
  ukr: ["Kyiv", "Kharkiv", "Lviv", "Odesa"],
};

const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("cities");
const resultParagraph = document.getElementById("result");


function changeCitiesList() {
  const selectedCountry = countrySelect.value;
  const cities = countries[selectedCountry];
  citySelect.innerHTML = "";

  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });

  const selectedCity = citySelect.value;
  resultParagraph.textContent = `${countrySelect.options[countrySelect.selectedIndex].text}, ${selectedCity}`;
}

countrySelect.addEventListener("change", changeCitiesList);
citySelect.addEventListener("change", () => {
  const selectedCity = citySelect.value;
  resultParagraph.textContent = `${countrySelect.options[countrySelect.selectedIndex].text}, ${selectedCity}`;
});
changeCitiesList();