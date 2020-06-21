// Model : communicate with db
const Carousel = require('../database-mongodb/Carousel.js');

function getRooms(callback) {
  console.log('get in model');
  Carousel.find(callback);
}

module.exports = {
  getRooms,
}