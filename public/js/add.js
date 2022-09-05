// eslint-disable-next-line strict, lines-around-directive
'use strict';

console.log('add.js');

const formEl = document.forms[0];

formEl.addEventListener('submit', (e) => {
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

  // gavus patvirtinima kad sukurtas automobilis redirectinti i home page

  // o neigiama mes rodom klaidas

  // if (resp.ok) {
  //   // redirect
  // } else if (resp.status === 400) {
  //   // handleErrors() - > atvaizduoja klaidas
  // }
});
