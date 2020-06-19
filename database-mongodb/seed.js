const db  = require('./index.js');
const Carousel = require('./Carousel.js');

const sampleCarousel = [
  {
    room_id: 1,
    title: 'White Swan - Abbey Suite with Fireplace',
    bed: 3,
    type: 'Entire house',
    price: 279,
    stars: {
      isStars: true,
      rating: 4
    },
    room_photo: {imageUrl: 'https://source.unsplash.com/1600x900/?bedroom', description: 'White Swan - Abbey Suite with Fireplace'},
    isSuperhost: true,
    review_no: 0,
    save_status: {
      user_id: 1,
      name: 'SF',
      saved: true
    }
  },
  {
    room_id: 2,
    title: 'White Swan - Abbey Suite with Fireplace',
    bed: 1,
    type: 'Hotel room',
    price: 279,
    stars: {
      isStars: true,
      rating: 4
    },
    room_photo: {imageUrl: 'https://source.unsplash.com/1600x900/?bedroom', description: 'White Swan - Abbey Suite with Fireplace'},
    isSuperhost: true,
    review_no: 0,
    save_status: {
      user_id: 1,
      name: 'SF',
      saved: true
    }
  },
  {
    room_id: 2,
    title: 'White Swan - Abbey Suite with Fireplace',
    bed: 1,
    type: 'Entire house',
    price: 279,
    stars: {
      isStars: true,
      rating: 4
    },
    room_photo: {imageUrl: 'https://source.unsplash.com/1600x900/?bedroom', description: 'White Swan - Abbey Suite with Fireplace'},
    isSuperhost: true,
    review_no: 0,
    save_status: {
      user_id: 1,
      name: 'SF',
      saved: true
    }
  },
  {
    room_id: 3,
    title: 'White Swan - Abbey Suite with Fireplace',
    bed: 1,
    type: 'Room in boutique hotel',
    price: 279,
    stars: {
      isStars: true,
      rating: 4
    },
    room_photo: {imageUrl: 'https://source.unsplash.com/1600x900/?bedroom', description: 'White Swan - Abbey Suite with Fireplace'},
    isSuperhost: true,
    review_no: 0,
    save_status: {
      user_id: 1,
      name: 'SF',
      saved: true
    }
  },
  {
    room_id: 4,
    title: 'White Swan - Abbey Suite with Fireplace',
    bed: 1,
    type: 'Hotel room',
    price: 279,
    stars: {
      isStars: true,
      rating: 4
    },
    room_photo: {imageUrl: 'https://source.unsplash.com/1600x900/?bedroom', description: 'White Swan - Abbey Suite with Fireplace'},
    isSuperhost: true,
    review_no: 0,
    save_status: {
      user_id: 1,
      name: 'SF',
      saved: true
    }
  },
  {
    room_id: 5,
    title: 'White Swan - Abbey Suite with Fireplace',
    bed: 1,
    type: 'Hotel room',
    price: 279,
    stars: {
      isStars: true,
      rating: 4
    },
    room_photo: {imageUrl: 'https://source.unsplash.com/1600x900/?bedroom', description: 'White Swan - Abbey Suite with Fireplace'},
    isSuperhost: true,
    review_no: 0,
    save_status: {
      user_id: 1,
      name: 'SF',
      saved: true
    }
  }

]

const insertSampleCarousel = function() {
  console.log('trying to make create')
  Carousel.create(sampleCarousel, function(err, result) {
    if (err) {
      console.log(err)
    }
  })
  .then(() => db.disconnect());
    // .then(() => db.connect());
};
console.log('after create')




insertSampleCarousel();

//should call node seed.js in the seed directory
//run seed.js (node seed.js)

//connect mongo db and check my carousel collection is there

module.exports = {
  insertSampleCarousel
 }