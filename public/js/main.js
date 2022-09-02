console.log('main.js');

// eslint-disable-next-line strict, linebreak-style
('use strict');

const baseUrl = 'http://localhost:3000/api';
const carListEl = document.getElementById('cars');

function makeCarsListHtml(carsArr, dest) {
  dest.innerHTML = '';
  carsArr.forEach((cObj) => {
    const liEl = document.createElement('li');
    liEl.textContent = `${cObj.title} - $${cObj.price}`;
    dest.append(liEl);
  });
}

async function getCars(url, callBack) {
  const resp = await fetch(url);
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
  callBack(dataInJs, carListEl);
}

getCars(`${baseUrl}/cars`, makeCarsListHtml);
