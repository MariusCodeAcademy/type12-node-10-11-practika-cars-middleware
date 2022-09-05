// eslint-disable-next-line strict, lines-around-directive
'use strict';

console.log('add.js');
const baseUrl = 'http://localhost:3000/api';

const formEl = document.forms[0];

formEl.addEventListener('submit', async (e) => {
  e.preventDefault();

  // surinkti formos inputus
  const newCar = {
    title: formEl.elements.title.value,
    image: formEl.elements.image.value,
    price: formEl.elements.price.value,
    numberPlates: formEl.elements.numberPlates.value,
  };
  console.log('newCar ===', newCar);

  // siusti newCar i musu back end
  const resp = await fetch(`${baseUrl}/cars`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(newCar),
  });

  console.log('resp ===', resp);

  // o neigiama mes rodom klaidas

  if (resp.ok) {
    // redirect
    window.location.href = 'index.html';
  } else if (resp.status === 400) {
    // handleErrors() - > atvaizduoja klaidas
  }
});
