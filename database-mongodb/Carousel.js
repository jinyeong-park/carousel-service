const mongoose = require('./index.js');

// assume one user is using it.
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
    bookmark: [{
      user_id: Number,
      isBookmark: Boolean,
      category: String,
    }],
  },
);


// .model(): makes a copy of schema -- document/table
const Carousel = mongoose.model('Carousel', carouselSchema);

module.exports = Carousel;
