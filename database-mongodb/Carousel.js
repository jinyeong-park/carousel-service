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

// const userSchema = new mongoose.Schema(
//   {
//     user_id: Number,
//     user_name: String,
//     bookmark: [{
//       category: String,
//       rooms: [{
//         room_id: Number,
//         imageUrl: String,
//       }],
//       saved_no: Number,
//     }],
//   },
// );

// .model(): makes a copy of schema -- document/table
const Carousel = mongoose.model('Carousel', carouselSchema);

module.exports = Carousel;
