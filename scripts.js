const mainContainer = document.querySelector('.main-container');
const allBtns = document.querySelector('.buttons');
const colorBtn = allBtns.querySelector('.color-mode');
const rainbowBtn = allBtns.querySelector('.rainbow-mode');
const eraserBtn = allBtns.querySelector('.eraser-btn');
const clearBtn = allBtns.querySelector('.clear-btn');
const gridBtn = allBtns.querySelector('.change-btn');
const colorSelector = document.querySelector('#favcolor');
let selectedColor = '#000';
let eraseMode = 0;
let colorMode = 0;
let rainbowMode = 0;

let n = 16;

function formGrid() {
  mainContainer.innerHTML = '';
  for (let i = 0; i < n; i++) {
    const rows = document.createElement('div');
    mainContainer.appendChild(rows);
    rows.classList.add('row-class');
    for (let j = 0; j < n; j++) {
      const box = document.createElement('div');
      box.classList.add('each-box');
      rows.appendChild(box);
    }
  }
}

function changeColor(e) {
  if (e.target.classList.contains('each-box')) {
    e.target.style.backgroundColor = selectedColor;
  }
}

function rainbowColor() {
  function randomNoGenerator() {
    let randomNo = Math.floor(Math.random() * 250 + 1);
    return randomNo;
  }
  let randomColor = `rgb(${randomNoGenerator()}, ${randomNoGenerator()}, ${randomNoGenerator()})`;
  return randomColor;
}

function rainbowChanger(e) {
  if (e.target.classList.contains('each-box')) {
    e.target.style.backgroundColor = rainbowColor();
  }
}

function rainbowToggler() {
  if (rainbowMode) {
    rainbowMode = 0;
    rainbowBtn.style.backgroundColor = '#888';
  } else if (!rainbowMode) {
    rainbowMode = 1;
    if (colorMode) colorToggler();
    if (eraseMode) eraserToggler();
    rainbowBtn.style.backgroundColor = '#5c5c5c';
  }
}

function eraseColor(e) {
  if (
    e.target.classList.contains('each-box') &&
    e.target.style.backgroundColor !== '#ede3e3'
  ) {
    e.target.style.backgroundColor = '#ede3e3';
  }
}

function eraserToggler() {
  if (eraseMode) {
    eraseMode = 0;
    eraserBtn.style.backgroundColor = '#888';
  } else {
    eraseMode = 1;
    eraserBtn.style.backgroundColor = '#5c5c5c';
    if (colorMode) colorToggler();
    if (rainbowMode) rainbowToggler();
  }
}

function changeGridLayout(e) {
  n = prompt('Enter the number of rows/columns: ');
  if (n > 0 && n <= 100) {
    formGrid();
    resetUI();
  } else {
    alert('Enter a Valid Input');
  }
}

function colorToggler() {
  if (colorMode) {
    colorMode = 0;
    colorBtn.style.backgroundColor = '#888';
  } else {
    colorMode = 1;
    if (eraseMode) eraserToggler();
    if (rainbowMode) rainbowToggler();
    colorBtn.style.backgroundColor = '#5c5c5c';
  }
}

// function printColor() {
//   if (rainbowMode && colorMode === 0) {
//     rainbowChanger(e);
//   } else if (colorMode && rainbowMode === 0) {
//     changeColor(e);
//   }
// }

function clearAll() {
  const boxes = mainContainer.querySelectorAll('.each-box');
  boxes.forEach((box) => (box.style.backgroundColor = '#ede3e3'));
  resetUI();
}

function onHover(e) {
  if (eraseMode) {
    eraseColor(e);
  } else if (rainbowMode && colorMode === 0) {
    rainbowChanger(e);
  } else if (colorMode && rainbowMode === 0) {
    changeColor(e);
  }
}
function resetUI() {
  if (rainbowMode) rainbowToggler();
  if (colorMode) colorToggler();
  if (eraseMode) eraserToggler();
  eraseMode = 0;
  colorMode = 0;
  rainbowMode = 0;
  formGrid();
}

resetUI();
// checkUI();
// function checkUI() {
//   eraseMode = 0;
//   colorMode = 1;
//   colorToggler();
//   formGrid();
// }

// Event Listeners
mainContainer.addEventListener('mouseover', onHover);
eraserBtn.addEventListener('click', eraserToggler);
clearBtn.addEventListener('click', clearAll);
colorBtn.addEventListener('click', colorToggler);
rainbowBtn.addEventListener('click', rainbowToggler);
colorSelector.addEventListener(
  'input',
  (e) => (selectedColor = e.target.value)
);
gridBtn.addEventListener('click', changeGridLayout);
