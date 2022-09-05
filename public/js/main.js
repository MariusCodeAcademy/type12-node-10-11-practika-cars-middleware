console.log('main.js');

// eslint-disable-next-line strict, linebreak-style

const baseUrl = 'http://localhost:3000/api';
const carListEl = document.getElementById('cars');

function deleteCar(idToDelete) {
  console.log('delete car', idToDelete);
  // siusti delete uzklausa i back end
  // pasitikrinam ar resp.ok arba resp.status
  // jei ok tai atnaujinam sarasa
  // jei ne pranesam apie klaida
}

function makeCarsListHtml(carsArr, dest) {
  dest.innerHTML = '';
  carsArr.forEach((cObj) => {
    const carDivEl = document.createElement('div');
    carDivEl.className = 'card';
    carDivEl.innerHTML = `
    <img src="images/${cObj.image}" class="card-img-top img-fluid" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${cObj.title}</h5>
      <p class="card-text"
        >${cObj.numberPlates} - Price: $${cObj.price}</p
      >
    </div>
    `;
    const buttonEl = document.createElement('button');
    buttonEl.addEventListener('click', () => deleteCar(cObj.id));
    buttonEl.textContent = 'delete';
    buttonEl.classList = 'btn btn-danger';
    carDivEl.querySelector('.card-body').append(buttonEl);
    dest.append(carDivEl);
  });
}

async function getCars(url, callBack) {
  const resp = await fetch(url);
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
  callBack(dataInJs, carListEl);
}

getCars(`${baseUrl}/cars`, makeCarsListHtml);
