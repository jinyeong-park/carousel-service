const faker = require('faker');
const Promise = require('bluebird');

// const db = require('./index.js');
const Carousel = require('./Carousel.js');

// amazon s3 images
const images = [
  'https://carousels.s3.us-east-2.amazonaws.com/37522109-5d22-4430-b046-c43ea7254457.jpg',
  'https://carousels.s3.us-east-2.amazonaws.com/57dbeef8-0a5d-452a-b41a-57482310e784.jpg',
  'https://carousels.s3.us-east-2.amazonaws.com/6f4df6fd-0be0-400c-a5a4-4fea34c78504.jpg',
  'https://carousels.s3.us-east-2.amazonaws.com/7037a085-1f13-4646-a108-fd7ed0bb28a3.jpg',
  'https://carousels.s3.us-east-2.amazonaws.com/7a357ecb-ff19-4ea0-b389-2c36080bc326.jpg',
  'https://carousels.s3.us-east-2.amazonaws.com/832a1d48-01f0-4d1f-a5bf-1129715aa8e4.jpg',
  'https://carousels.s3.us-east-2.amazonaws.com/8677ca85-eb21-4676-94e5-34bde1e50e6a.jpg',
  'https://carousels.s3.us-east-2.amazonaws.com/bad022ab-c96e-48d7-9a26-715f802ffacc.jpg',
  'https://carousels.s3.us-east-2.amazonaws.com/c219e069-08cf-4815-ac54-3f11d55eac02.jpg',
  'https://carousels.s3.us-east-2.amazonaws.com/cc700dbb-b817-443d-98ab-ed78905aa6dd.jpg',
  'https://carousels.s3.us-east-2.amazonaws.com/e8225394-8449-4af5-9b35-7d263b7a7e9b.jpg',
];

function getRandomPhotoUrl() {
  const min = 0;
  const max = images.length - 1;
  // The maximum is inclusive and the minimum is inclusive
  const randomIdx = Math.floor(Math.random() * (max - min + 1)) + min;
  return images[randomIdx];
}

// randomTitle
// faker.lorem.words();
// console.log(`randomTitle=${randomTitle}`)

function getRandomBed() {
  const min = 1;
  const max = 4;
  const randomBed = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomBed;
}

const types = ['Hotel room', 'Entire house', 'Room in boutique hotel'];

function getRandomType() {
  const min = 0;
  const max = types.length - 1;
  const randomType = Math.floor(Math.random() * (max - min + 1)) + min;
  return types[randomType];
}

function getRandomPrice() {
  const min = 80;
  const max = 300;
  const randomPrice = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomPrice;
}

function getRandomStars() {
  const min = 0;
  const max = 5;
  const randomStars = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomStars;
}

// isSuperhost
// faker.random.boolean();

function getRandomReviewNo() {
  const min = 0;
  const max = 1000;
  const randomReviewNo = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomReviewNo;
}

function getRandomUserId() {
  const min = 0;
  const max = 10;
  const randomUserId = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomUserId;
}

// randomCity
// faker.address.city()

const getCarousels = (num) => {
  const sampleCarouselSet = [];
  for (let i = 0; i < num; i += 1) {
    const sampleCarousel = {
      room_id: i,
      title: faker.lorem.words(),
      bed: getRandomBed(),
      type: getRandomType(),
      price: getRandomPrice(),
      stars: getRandomStars(),
      imageUrl: getRandomPhotoUrl(),
      isSuperhost: faker.random.boolean(),
      review_no: getRandomReviewNo(),
      bookmark: [{
        user_id: getRandomUserId(),
        isBookmark: faker.random.boolean(),
        category: faker.address.city(),
      }],
    };
    sampleCarouselSet.push(sampleCarousel);
  }
  return sampleCarouselSet;
};

const carousels = getCarousels(100);
// console.log(carousels[99]);

// const sampleCarousel = [
//   {
//     room_id: 1,
//     title: 'White Swan - Abbey Suite with Fireplace',
//     bed: 3,
//     type: 'Entire house',
//     price: 279,
//     stars: {
//       isStars: true,
//       rating: 4
//     },
//     room_photo: {imageUrl: 'https://source.unsplash.com/1600x900/?bedroom', description: 'White Swan - Abbey Suite with Fireplace'},
//     isSuperhost: true,
//     review_no: 0,
//     save_status: {
//       user_id: 1,
//       name: 'SF',
//       saved: true
//     }
//   },
// ]

// const insertSampleCarousel = function () {
//   console.log('trying to make create');
//   Carousel.create(carousels, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   })
//     .then(() => db.disconnect());
// };
const insertSampleCarousel = function () {
  console.log('trying to make create');
  Promise.resolve(Carousel.create(carousels))
    .then(() => db.disconnect())
    .catch((error) => console.log('this is catch error:', error));
};

insertSampleCarousel();

// should run node seed.js in the seed directory
// node seed.js
// connect mongo db and check my carousel collection is there

// module.exports = {
//   insertSampleCarousel
// }