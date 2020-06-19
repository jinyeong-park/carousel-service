const mongoose = require('mongoose');
const db = require('./index.js');


const carouselSchema = new mongoose.Schema(
  {
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
      saved: Boolean
 }
},
  {
    timestamps: true
  }
);

//model --document like mysql table
//.model() function makes a copy of schema
const Carousel = mongoose.model('Carousel', carouselSchema);
module.exports = Carousel;
