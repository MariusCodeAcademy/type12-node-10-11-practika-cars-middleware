// pirmas middleWare
function myFirstMiddleWare(req, res, next) {
  console.log('myFirstMiddleWare', req.method);
  next();
}

function showBody(req, res, next) {
  // pasitikrinti jei req metodas yra post, put, arba patch tik tada maty req body
  if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
    console.log('req.body middleware ===', req.body);
  }
  next();
}

function validateNewCar(req, res, next) {
  // atkeliam validacijos logika
  // jei viskas gerai tai next,
  // nei ne tai res.status(400), validacijos klaida
}

module.exports = {
  myFirstMiddleWare,
  showBody,
};
