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
  const { title, image, price, numberPlates } = req.body;

  // bendra VALIDATION
  try {
    if ([title.trim(), image.trim(), price.trim(), numberPlates.trim()].includes('')) {
      throw new Error('not all inputs ivesta');
    }
  } catch (error) {
    console.log('error validation ===', error.stack);
    res.status(400).json({
      type: 'validation',
      msg: 'Please check the form',
    });
    return;
  }
  // jei viskas gerai tai next,
  next();
  // nei ne tai res.status(400), validacijos klaida
}

module.exports = {
  myFirstMiddleWare,
  validateNewCar,
  showBody,
};
