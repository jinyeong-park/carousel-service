//Controller
const Model = require('./Model.js');


function getBlogs(req, res) {
  console.log('controller in get');
  Model.getBlogs( (err, results) => {
    if (err) {
      console.log('error:', err);
      res.status(400).send(err)
    } else {
      res.send(results);
    }
  })
}



module.exports = {
  getBlogs
 }
