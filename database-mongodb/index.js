const mongoose = require('mongoose');
// database name: carousel
const db = mongoose.connect('mongodb://localhost/carousel');

module.exports = db;
