// Controller
const Model = require('./Model.js');

function getRooms(req, res) {
  console.log('controller in get');
  Model.getRooms((err, results) => {
    if (err) {
      console.log('error:', err);
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
}

module.exports = {
  getRooms,
};
