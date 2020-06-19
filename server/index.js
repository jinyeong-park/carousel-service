const express = require('express');
const bodyParser = require('body-parser');
const Controller = require('./Controller.js');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/api/rooms/carousel/', (req, res) => {
  // TODO - your code here!
  Controller.getRooms(req, res);
});

// app.post('/api/blogs', function(req, res) {
//   // TODO - your code here!
//   Controller.getBlogs(req, res)
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});