/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('./index.js');

const carouselSchema = new mongoose.Schema(
  {
    room_id: Number,
    title: String,
    bed: Number,
    type: String,
    price: Number,
    stars: Number,
    imageUrl: String,
    isSuperhost: Boolean,
    review_no: Number,
    save_status: {
      user_id: Number,
      name: String,
      saved: Boolean,
    },
  },
);

// .model(): makes a copy of schema -- document/table
const Carousel = mongoose.model('Carousel', carouselSchema);
module.exports = Carousel;
