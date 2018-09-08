const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    db.collection('Users')
      .findOneAndUpdate(
        {
          _id: new ObjectID('5b888a4d9730bd3862bd549f')
        },
        {
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
    )
      .then(result => {
        console.log(result)
      })
      .catch(err => {
      })

    // updateTwo

    // updateThree

    db.close()
  }
)
