const mainContainer = document.querySelector('.main-container');

let n = 10;

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
