const express = require('express');
const bodyParser = require('body-parser');

const Controller = require('./Controller.js');

const app = express();
const PORT = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/rooms/carousel/', (req, res) => {
  Controller.getRooms(req, res);
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});