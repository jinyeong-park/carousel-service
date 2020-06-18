// Model : communicate with db
const Blogs = require('../database-mongodb/Carousel.js');



function getRooms(callback) {
   //mongo db
   console.log('get in model')
   Blogs.find(callback).sort({createdAt: -1})



   //db.collection.find().sort( { age: -1 } )

  //mysql
  // const q = 'SELECT * FROM '
  // db.query(q, function(err, results){
  //   if (err) {
  //     console.log('error in model:', err)
  //   } else {
  //     callbackFromController(null, results)
  //   }
  // })
}




module.exports = {
  getRooms
 }