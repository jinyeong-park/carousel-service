const mongoose = require('mongoose');
// database name: carousel
const mongoUri = 'mongodb://localhost/carousel';
const db = mongoose.connect(mongoUri);

module.exports = db;
