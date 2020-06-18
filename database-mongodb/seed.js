const db  = require('./index.js');
const Carousel = require('./Carousel.js');

const sampleCarousel = [
  {
    room_id: 1,
    name: 'White Swan - Abbey Suite with Fireplace',
    bed: 1,
    type: 'Hotel room',
    price: 279,
    stars: {
      isStars: Boolean,
      rating: Number
    },
    room_photo: [{imageUrl: 'https://source.unsplash.com/1600x900/?bedroom', description: 'White Swan - Abbey Suite with Fireplace'}],
    isSuperhost: true,
    review_no: 0,
    save_status: {
      user_id: 1,
      name: 'SF',
      saved: true
    }
  },
  {
    room_id: 1,
    name: 'White Swan - Abbey Suite with Fireplace',
    bed: 1,
    type: 'Hotel room',
    price: 279,
    stars: {
      isStars: Boolean,
      rating: Number
    },
    room_photo: [{imageUrl: 'https://source.unsplash.com/1600x900/?bedroom', description: 'White Swan - Abbey Suite with Fireplace'}],
    isSuperhost: true,
    review_no: 0,
    save_status: {
      user_id: 1,
      name: 'SF',
      saved: true
    }
  },
  {
    room_id: 1,
    name: 'White Swan - Abbey Suite with Fireplace',
    bed: 1,
    type: 'Hotel room',
    price: 279,
    stars: {
      isStars: Boolean,
      rating: Number
    },
    room_photo: [{imageUrl: 'https://source.unsplash.com/1600x900/?bedroom', description: 'White Swan - Abbey Suite with Fireplace'}],
    isSuperhost: true,
    review_no: 0,
    save_status: {
      user_id: 1,
      name: 'SF',
      saved: true
    }
  },
  {
    room_id: 1,
    name: 'White Swan - Abbey Suite with Fireplace',
    bed: 1,
    type: 'Hotel room',
    price: 279,
    stars: {
      isStars: Boolean,
      rating: Number
    },
    room_photo: [{imageUrl: 'https://source.unsplash.com/1600x900/?bedroom', description: 'White Swan - Abbey Suite with Fireplace'}],
    isSuperhost: true,
    review_no: 0,
    save_status: {
      user_id: 1,
      name: 'SF',
      saved: true
    }
  },
  {
    room_id: 1,
    name: 'White Swan - Abbey Suite with Fireplace',
    bed: 1,
    type: 'Hotel room',
    price: 279,
    stars: {
      isStars: Boolean,
      rating: Number
    },
    room_photo: [{imageUrl: 'https://source.unsplash.com/1600x900/?bedroom', description: 'White Swan - Abbey Suite with Fireplace'}],
    isSuperhost: true,
    review_no: 0,
    save_status: {
      user_id: 1,
      name: 'SF',
      saved: true
    }
  },
  {
    room_id: 1,
    name: 'White Swan - Abbey Suite with Fireplace',
    bed: 1,
    type: 'Hotel room',
    price: 279,
    stars: {
      isStars: Boolean,
      rating: Number
    },
    room_photo: [{imageUrl: 'https://source.unsplash.com/1600x900/?bedroom', description: 'White Swan - Abbey Suite with Fireplace'}],
    isSuperhost: true,
    review_no: 0,
    save_status: {
      user_id: 1,
      name: 'SF',
      saved: true
    }
  }

];

const insertSampleCarousel = function() {
  Carousel.create(sampleCarousel)
    .then(() => db.disconnect());
    // .then(() => db.connect());
};

insertSampleCarousel();



module.exports = {
  insertSampleCarousel
 }